
// Imports
import React, {useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './Form';
import schema from './validation/schema';
import { useEffect } from 'react/cjs/react.development';

// App
function App() {
  const [users, setUsers] = useState({name: '', email: '', password: '', agree: false});
  const [errors, setErrors] = useState({name: '', email: '', password: '', agree: false});
  const [disabled, setDisabled] = useState(true);

  const setUsersError = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }
  const changeValue = (event) => {
    const {name, type, checked, value} = event.target
    const newValue = type === 'checkbox' ? checked : value
    setUsers({...users, [name]: newValue})
    setUsersError(name, newValue)
  }
  const submit = event => {
    event.preventDefault()
    const newUser = {name: users.name.trim(), email: users.email, password: users.password, agree: users.agree}
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers({name: '', email: '', password: '', agree: false})
    })
    .catch(err => {
      debugger
    })
  }
  useEffect(() => {
    schema.isValid(users).then(valid => setDisabled(!valid))
  }, [users])

  // Returns
  return (
    <div>
      <div style = {{color: 'blue'}}>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.agree}</div>
      </div>
            <form onSubmit = {submit}>
                <label htmlFor = 'name'>Name
                    <input type = 'text' id = 'name' name = 'name' placeholder = 'Enter a name' value = {users.name} onChange = {changeValue} />
                </label>
                <label htmlFor = 'email'>Email
                    <input type = 'email' id = 'email' name = 'email' placeholder = 'Enter an email' value = {users.email} onChange = {changeValue} />
                </label>
                <label htmlFor = 'password'>Password
                    <input type = 'password' id = 'password' name = 'password' placeholder = 'Enter a password' value = {users.password} onChange = {changeValue} />
                </label>
                <label htmlFor = 'terms'>I agree to the terms of service and have read it carefully
                    <input type = 'checkbox' id = 'terms' name = 'agree' onChange = {changeValue} checked = {users.agree} />
                </label>
                <button disabled = {disabled} type = {'submit'}>Submit</button>
            </form>
    </div>
  );
}

// Exports
export default App;
