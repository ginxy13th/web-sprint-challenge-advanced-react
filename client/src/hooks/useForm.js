// write your custom hook here to control your checkout form
import {useState} from 'react';

export const useForm = (key, initialValue) => {
    const [ values, setValues ] = useState(key, initialValue)

    const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    

    return [values, handleChanges]
}

// const CheckoutForm = (props) => {
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [values, setValues] = useState(initialValue);
  
//     const handleChanges = (e) => {
//       setValues({ ...values, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setShowSuccessMessage(true);
//     };