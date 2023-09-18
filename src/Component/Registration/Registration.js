import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form} from "formik";
import { Regform, initialValues} from "./RegForm";
import { NavLink } from "react-router-dom";
import '../../i18n'
import { useTranslation } from 'react-i18next';
import { SendImg } from "../img";

const Registration = (props) => {
  const { t, i18n } = useTranslation()
  const theme=props.Theme.theme;
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
   const onSubmit = (values) => {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("email", values.email);
    fData.append("pass", values.password);
    props.getRegistrationTC(fData);
  };
  return (
    <div class="col">
     <div className={`row h-100 d-flex align-items-center text-white bg-${theme.bg} bg-gradient `}>
        <div className={`mx-auto w-50 h-auto bg-${theme.bg} rounded-4 border border-${theme.border} border-opacity-50`}>
        <div className="mb-2"><h1 className="text-center">{t('registration')}</h1></div>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();}}>

      {({ isSubmitting }) => (
        <Form className="">
          {Regform('name',t('name'))}
          {Regform('email',t('email'))}
          {Regform('password',t('password'))}
          <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
          <button type="submit" disabled={isSubmitting} className={`btn btn-${theme.btn} mx-auto`}>{SendImg(20)} {t('submit')}</button>
          </div>
          <div className="row text-center">
          <p>{t('textLog')}<NavLink to='/login'>{t('signin')}</NavLink> </p>
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
