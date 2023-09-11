import React from "react";
import { Field, ErrorMessage } from "formik";
import moment from"moment";

const date = moment().format('YYYY-MM-DD HH:mm:ss');


export function TextError(props) {return <div className="error">{props.children}</div>;}
export function passwordValidation(password){
  if(!password) {return 'Required'} 
  else if(typeof(password)!='string')
  {return 'Format is not string'}
  else if(password.length>15)
  {return 'Password length is more than 15 symbols'}
}
export function nameValidation(name){
  if(!name)
    {return 'Required'}
  else if(typeof(name)!='string')
    {return 'Format is not string'}
  else if(name.length>25)
    {return 'Name length is more than 25 symbols'}
  else if(name[0]!=name[0].toUpperCase())
    {return 'Name should be started with capital letter'}
}

export function Logform(name,label,validate) {
  return (
    <div className="col-5 mb-3 mt-2  text-center mx-auto">
      <label><h5>{label}</h5></label>
      <Field
      className="form-control form-control-lg w-100" component='input'
        name={name}
        validate={validate}
        placeholder={label}
        type={"input"}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );}


export const initialValues = { name: "", email: "", password: "" };
