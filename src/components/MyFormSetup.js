
import React from 'react'
import { withFormik } from 'formik';
import MyForm from './MyForm'
import * as Yup from 'yup'

const Schema = Yup.object().shape({
    email: Yup.string()
    .email("please enter a valid email")
    .required('This field is required'),
    name:Yup.string()
    .min(8)
    .required('One second please! What is your name? ')
  });
  

const FormikConfig = withFormik({
    mapPropsToValues: () => ({ email: '', name: '' }),
  
    // Custom sync validation
    validationSchema: Schema,
  
    handleSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 5000);
      // axios.post(url, {
        
      // })
    },
  
    displayName: 'BasicForm', // helps with React DevTools
  })(MyForm);

  export default FormikConfig
  