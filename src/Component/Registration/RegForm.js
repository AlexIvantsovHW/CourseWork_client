import React from "react";
import { Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import moment from"moment";

const date = moment().format('YYYY-MM-DD HH:mm:ss');


export function TextError(props) {return <div className="error">{props.children}</div>;}
export const validateSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
})
export function Regform(name,label) {
  return (
    <div className="col-5 mb-3 ml-5 text-center">
      <label><h5>{label}</h5></label>
      <Field
      className="form-control form-control-lg ml-10 input-sm" component='input'
        name={name}
        placeholder={name}
        type={"input"}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );}


export const initialValues = { name: "", email: "", password: "" };
