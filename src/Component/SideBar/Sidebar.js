import React, { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { setTheme } from "../CommonFunc";


function formBar(name,link) {
 
  return (
    <li className="nav-item mt-1">
    <NavLink to={link} className='mt-1'>
      <i className="fs-4 bi-house mt-1"></i>{" "}
      <span className="ms-1 d-none d-sm-inline">{name}</span>
    </NavLink>
  </li>
  );
}
const SideBar = (props) => {
const theme=props.Theme.theme;

  const id=props.Login.id;
    return (
    <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-${theme}  bg-gradient`}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Logotip</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          {formBar('Home','/main')}
          {(!props.Login.auth? formBar('Login','/login'):
          (
            <li className="nav-item mt-1">
            <NavLink to={'/'} className='mt-1'>
              <i className="fs-4 bi-house mt-1"></i>{" "}
              <span onClick={()=>{props.loginAC({auth:false,id:null,name:null,password:null})}} 
              className="ms-1 d-none d-sm-inline">Logout</span>
            </NavLink>
          </li>
          ))}
          {(props.Login.auth?formBar('Profile',`/profile/${id}`):null)}
          {(props.Login.auth?formBar('Users',`/users`):null)}
         {((props.Login.auth===true)&&(props.Login.name==='Admin')?formBar('Admin','/admin'):null)}
          {formBar('Language')}
          <button onClick={()=>{setTheme('dark',props.themeAC)}} >Dark</button>
          <button onClick={()=>{setTheme('light',props.themeAC)}}>Light</button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

/* https://www.codeply.com/p/WGCqYEiPBg code of sidebar*/