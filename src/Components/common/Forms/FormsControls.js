import React from "react";
import './FormControls.scss'
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
  const hasError = touched && error

  return (
    <div className={!hasError ? 'FormField' : 'FormField error'}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, component, validate, props = {}, text = '') => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validate}
      {...props}
    /> {text}
  </div>
)