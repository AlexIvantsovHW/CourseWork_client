import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form} from "formik";
import { Logform, initialValues, nameValidation, passwordValidation} from "./LogForm";
import { NavLink, Navigate } from "react-router-dom";
import '../../i18n'
import { useTranslation } from 'react-i18next';
import { BaseURL } from './../../API/API';
import { EnterImg } from "../img";


const Login = (props) => {
  const { t, i18n } = useTranslation()
  const theme=props.Theme.theme;
  async  function onSubmit (values) {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("pass", values.password);
    await props.getLoginTC(fData);
    <NavLink to={'/main'} />
  };

  const githubLogin=()=>{
    const popup = window.open(
      "http://localhost:3001/auth/github",
      "targetWindow",
      `toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes,
      width=620,
      height=700`
    );

    window.addEventListener("message", (event) => {
      if (event.origin === "http://localhost:3001") {
        if (event.data) {
          props.getGitLoginTC(event.data)
          popup?.close();
        }
      }
    });
  }
  return (
    <div class="col">
     <div className={`row h-100 d-flex align-items-center text-${theme.font} bg-${theme.bg} bg-gradient`}>
        <div className={`col-md-6  col-10 mx-auto  h-auto bg-${theme.bg} border border-${theme.border} border-opacity-50 rounded-4`}>
        <div className="mb-2"><h3 className={`text-center text-${theme.font}`} >{t('login')}</h3></div>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
      await onSubmit(values);
      resetForm();
    }}
    >
      {({ isSubmitting }) => (
        <Form className="">
          {Logform('name',t('name'),nameValidation)}
          {Logform('password',t('password'),passwordValidation)}
          <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
          <button type="submit" disabled={isSubmitting} className={`btn btn-${theme.btn} border-0 mx-auto fw-bold`}>{EnterImg(20)} {t('signin')}</button>
          </div>
          <div className="row text-center text-white">
          <p className=" text-decoration-none">{t('textReg')}<NavLink classname='text-white fw-bold text-decoration-none ' to='/'> {t('registration')}</NavLink> </p>
          </div>
        </Form>
      )}
    </Formik>
    <button  onClick={githubLogin}>Войти с помощью GitHub</button>
        </div>
      </div>
</div>
  );
};

export default Login;
