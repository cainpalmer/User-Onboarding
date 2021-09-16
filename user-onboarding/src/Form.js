
// Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

// Form
const Form = () => {
    const [users, setUsers] = useState({name: '', email: '', password: '', agree: false})
    const changeValue = (event) => {
        const {name, type} = event.target
    }

    // Returns
    return (
        <div>
                <form>
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
                    <button type = {'submit'}>Submit</button>
                </form>
        </div>
      )
}

// Exports
export default Form;