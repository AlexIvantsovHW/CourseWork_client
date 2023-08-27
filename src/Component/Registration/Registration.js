import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form} from "formik";
import { Regform, initialValues} from "./RegForm";
import { NavLink } from "react-router-dom";


const Registration = (props) => {
const validate=values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}
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
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
        <div className="mb-2"><h1 className="text-center">REGISTRATION</h1></div>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className="">
          {Regform('name','Name')}
          {Regform('email','email')}
          {Regform('password','Password')}
          <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
          <button type="submit" disabled={isSubmitting} className="btn btn-success mx-auto ">Submit</button>
          </div>
          <div className="row text-center">
          <p>Already have an account?<NavLink to='/login'> Sign In</NavLink> </p>
          </div>
        </Form>
      )}
    </Formik>
        </div>
        
      </div>
</div>

    
  );
};

export default Registration;
