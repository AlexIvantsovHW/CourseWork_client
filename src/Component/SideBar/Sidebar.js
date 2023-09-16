import React, { useState } from "react";
import './style.css'
import { Link, NavLink } from "react-router-dom";
import { setTheme } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { searchLink } from "../CommonFunc";
import { AdminImg, EnterImg, LogoutImg, MoonImg, ProfileImg, RecommendationImg, SunImg, UsersImg } from "../img";
import Admin from './../Admin/Admin';

function formBar(name,link,func) {
 
  return (
    <li className="nav-item mt-1">
      {func}
    <NavLink to={link} className='mt-1'>
      <i className="fs-4 bi-house mt-1"></i>{" "}
      <span className="ms-1 d-none d-sm-inline">{name}</span>
    </NavLink>
  </li>
  );
}
const SideBar = (props) => {
  const [search,setSearch]=useState('');
  const Recommendation=props.Recommendation.recommendation;
  const theme=props.Theme.theme;
  const { t, i18n } = useTranslation();
const filteredData=searchLink(search,Recommendation);
  const id=props.Login.id;
    return (
    <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-${theme} border-end border-danger border-1 border-opacity-25`}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Logotip</span>
        </a>

        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        {formBar(t('home'),'/main',RecommendationImg(20))}  
         {(props.Login.auth?formBar(t('profile'),`/profile/${id}`,ProfileImg(20)):null)}
          {(props.Login.auth?formBar(t('users'),`/users`,UsersImg(20)):null)}
         {((props.Login.auth===true)&&(props.Login.name==='Admin')?formBar(t('admin'),'/admin',AdminImg(20)):null)}
         {(!props.Login.auth?formBar(t('login'),'/login',EnterImg(20)):
          (
            <li className="nav-item mt-1">
            <NavLink to={'/'} className='mt-1'>
              <i className="fs-4 bi-house mt-1"></i>{" "}
              {LogoutImg(20)}
              <span onClick={()=>{props.loginAC({auth:false,id:null,name:null,password:null})}} 
              className="ms-1 d-none d-sm-inline">{t('logout')}</span>
            </NavLink>
          </li>
          ))}
          <div>
          <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
          </div>
          <div className="row  d-flex justify-content-center align-items-center w-100">
          <button className="col btn btn-outline-light border-0" onClick={()=>{setTheme(t('dark'),props.themeAC)}} >{MoonImg(30)}</button>
          <button className="col btn btn-outline-warning border-0" onClick={()=>{setTheme(t('light'),props.themeAC)}}>{SunImg(30)}</button>
          </div>
          <div className="">
           <div className="d-flex justify-content-center align-items-center w-100"> 
           <input type="text" placeholder={t('Search')} onChange={(e)=>setSearch(e.target.value)}/> 
           </div>
           <div className="col w-100 border overflow-auto" style={{ height: "100px" }}>
            {(search?filteredData.map((el)=><div><Link to={"/expand/"+el.id_r}>{el.title}</Link></div>):<div></div>)}
           </div>
          </div>
        </ul>

      </div>

    </div>
  );
};

export default SideBar;

/* https://www.codeply.com/p/WGCqYEiPBg code of sidebar*/