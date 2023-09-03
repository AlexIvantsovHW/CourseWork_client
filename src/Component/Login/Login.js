import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form} from "formik";
import { Logform, initialValues, nameValidation, passwordValidation} from "./LogForm";
import { NavLink, Navigate } from "react-router-dom";



const Login = (props) => {

  async  function onSubmit (values) {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("pass", values.password);
    await props.getLoginTC(fData);
    <NavLink to={'/main'} />
  };
  return (
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
        <div className="mb-2"><h1 className="text-center">Login</h1></div>
    <Formik
      initialValues={initialValues}
     onSubmit={async (values, { resetForm }) => {
      await onSubmit(values);
      resetForm();
    }}
    >
      {({ isSubmitting }) => (
        <Form className="">
          {Logform('name','Name',nameValidation)}
          {Logform('password','Password',passwordValidation)}
          <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
          <button type="submit" disabled={isSubmitting} className="btn btn-success mx-auto ">Submit</button>
          </div>
          <div className="row text-center">
          <p>Don't have an account yet?<NavLink to='/'> Registration</NavLink> </p>
          </div>
          <div className="row text-center"><div className="col"><p>Log in with Facebook</p></div><div  className="col"><p>Log in with Facebook</p></div></div>
        </Form>
      )}
    </Formik>
        </div>
        
      </div>
</div>

    
  );
};

export default Login;
