import React from "react";
import { Field, ErrorMessage } from "formik";
import moment from"moment";

const date = moment().format('YYYY-MM-DD HH:mm:ss');
export function TextError(props) {return <div className="error">{props.children}</div>;}
export function Regform(name,label) {
  return (
    <div className="col col-lg-8 col-md-8 col-sm-10 mt-2  text-center mx-auto">
      <label><h5>{label}</h5></label>
      <Field
      className="form-control form-control-md w-100" component='input'
        name={name}
        placeholder={name}
        type={"input"}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );}

export const initialValues = { name: "", email: "", password: "" };
