
// Imports
import * as yup from 'yup';

// Variables
const schema = yup.object().shape({
    name: yup.string().trim().required('please create a name').min(3, 'name must be at least 3 characters long'),
    email: yup.string().trim().email('must be a valid email address').required('please give your email'),
    password: yup.string().trim().required('please create a password'),
    agree: yup.string().oneOf([true], 'please agree to the terms of service and fill out all required items..'),
})

// Exports
export default schema;