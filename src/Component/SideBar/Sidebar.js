import React, { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { setTheme } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { searchLink } from "../CommonFunc";

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
  const [search,setSearch]=useState('');
const theme=props.Theme.theme;
const { t, i18n } = useTranslation()

  const id=props.Login.id;
    return (
    <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-${theme}  bg-gradient`}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Logotip</span>
        </a>
        <div className="d-flex justify-content-center align-items-center w-100">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          {formBar(t('home'),'/main')}
          {(!props.Login.auth? formBar(t('login'),'/login'):
          (
            <li className="nav-item mt-1">
            <NavLink to={'/'} className='mt-1'>
              <i className="fs-4 bi-house mt-1"></i>{" "}
              <span onClick={()=>{props.loginAC({auth:false,id:null,name:null,password:null})}} 
              className="ms-1 d-none d-sm-inline">{t('logout')}</span>
            </NavLink>
          </li>
          ))}
          {(props.Login.auth?formBar(t('profile'),`/profile/${id}`):null)}
          {(props.Login.auth?formBar(t('users'),`/users`):null)}
         {((props.Login.auth===true)&&(props.Login.name==='Admin')?formBar(t('admin'),'/admin'):null)}
          <div>
          <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option>Choose language</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
          </div>
          <button onClick={()=>{setTheme(t('dark'),props.themeAC)}} >Dark</button>
          <button onClick={()=>{setTheme(t('light'),props.themeAC)}}>Light</button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

/* https://www.codeply.com/p/WGCqYEiPBg code of sidebar*/