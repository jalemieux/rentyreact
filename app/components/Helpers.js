//Helpers.js
import React from 'react'

export const formGroupClasses = ( error ) => {
  if (error) {
      return "form-group has-error"
  }else{
      return "form-group"
  }
}

export const errorMessage = (error) => (
   <span class="help-block">{error}</span>
)

export const renderFormField = ( { input, name, label, type, placeholder, meta : { touched, error } } ) => (
  <div className={formGroupClasses(error)}>
    <label htmlFor={name} className="control-label">{label}</label>
    <div>
      <input {...input} type={type} className="form-control" placeholder={placeholder} />
    </div>
    {error && errorMessage(error) }
  </div>
)

export const renderFormGroupWAddon = ( { input, name, label, type, placeholder, addonDecorator, meta: { touched, error }}) => (
  <div className={formGroupClasses(error)}>
    <label htmlFor={name} className="control-label">{label}</label>
    <div className="input-group">
      {addonDecorator(<input {...input} type={type} className="form-control" placeholder={placeholder} />)}
    </div>
    {error && errorMessage(error) }
  </div>
)



export const nullDecorator = ( inputField ) => ( inputField )

export const dollarAddonDecorator = ( inputField ) => (
  <div className="input-group">
    <div className="input-group-addon">$</div>
    {inputField}
  </div>
)

export const percentAddonDecorator = ( inputField ) => (
  <div className="input-group">
    {inputField}
    <div className="input-group-addon">%</div>
  </div>
)

