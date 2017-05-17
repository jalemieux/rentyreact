//RegisterForm.js
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import { styles } from '../styles/'

import { renderFormGroupWAddon, nullDecorator } from './Helpers'

const RegisterForm = (props) => {
    const { onSubmit, initialValues, error, handleSubmit, pristine, submitting } = props    
    return (
        <div className="panel panel-primary">
          <div className="panel-body">
            <form onSubmit={handleSubmit(onSubmit)}>


              <Field component={renderFormGroupWAddon} name="userid" label="email address" type="email" 
                addonDecorator={nullDecorator} />

              <Field component={renderFormGroupWAddon} name="password" label="password" type="password" 
                addonDecorator={nullDecorator} />
		        
           { error && <div className="alert alert-danger" role="alert">{error}</div>}

              <button type="submit" disabled={submitting} className="pull-right btn btn-primary">register</button>
            </form>
          </div>
        </div>
    )
  
}

// Decorate the form component
export default reduxForm({
  form: 'registerForm' // a unique name for this form
})(RegisterForm);

