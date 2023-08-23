import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form} from "formik";
import { Regform, initialValues} from "./RegForm";
import "../../style.css";


const Registration = (props) => {

   const submit = (values) => {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("email", values.email);
    fData.append("pass", values.password);
    props.getRegistrationTC(fData);
    console.log(values)
    alert('Registration complete')
  };
  return (
    <div className="main">
    <h1>REGISTRATION</h1>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          {Regform('name','Name')}
          {Regform('email','email')}
          {Regform('password','Password')}
          <button type="submit" disabled={isSubmitting} className="btn btn-success">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  );
};

export default Registration;