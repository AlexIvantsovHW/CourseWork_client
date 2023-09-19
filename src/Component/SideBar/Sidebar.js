import React, { useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { setTheme } from "../CommonFunc";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { searchLink } from "../CommonFunc";
import {
  AdminImg,
  EnterImg,
  LogoImg,
  LogoutImg,
  MoonImg,
  ProfileImg,
  RecommendationImg,
  SunImg,
  UsersImg,
} from "../img";
import Admin from "./../Admin/Admin";

function formBar(name, link,theme,img) {
  return (
      
      <div className="row">
<div className="col d-flex justify-content-center align-items-center" style={{width:`30px`}}>
            <NavLink to={link} className={`text-decoration-none text-${theme.font}`}>
            {img}
            </NavLink></div>
            <div className="col d-flex justify-content-center align-items-center">
        <NavLink
        to={link}
        className={`mt-1 d-none d-sm-inline text-${theme.font} text-decoration-none`}
      >
        {name}
      </NavLink>
      </div>
      </div>
    
  );
}
const SideBar = (props) => {
  const [search, setSearch] = useState("");
  const Recommendation = props.Recommendation.recommendation;
  const theme = props.Theme.theme;
  const { t, i18n } = useTranslation();
  const filteredData = searchLink(search, Recommendation);
  const id = props.Login.id;
  return (
    <div
      className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-${theme.bg} border-end border-${theme.border} border-1 border-opacity-25`}
    >
      <div
        className={`d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-${theme.font} min-vh-100`}
      >
       <NavLink
        to={'/'}
        className="w-100 d-flex justify-content-center align-items center"
      >
        {LogoImg(100)}
      </NavLink>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          
          {formBar(t("home"), "/main",theme,RecommendationImg(20))}
        
          {props.Login.auth
            ? 
            <>
            {formBar(t("profile"), `/profile/${id}`,theme,ProfileImg(20))}
            </>
            : null}
          {props.Login.auth
            ? <>
            {formBar(t("users"), `/users`,theme,UsersImg(20))}
            </>
            : null}
          {props.Login.auth === true && props.Login.name === "Admin"
            ? 
            <>
            {formBar(t("admin"), "/admin", theme,AdminImg(20))}
            </>
            : null}
          {!props.Login.auth ? (
            <>
            {formBar(t("login"), "/login", theme,EnterImg(20))}
            </>
            
          ) : (
         
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center" style={{width:`30px`}}>
              <NavLink to={"/"} className={`text-decoration-none text-${theme.font}`}>
              {LogoutImg(20)}
              </NavLink>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
              <NavLink to={"/"} className={`mt-1 text-decoration-none text-${theme.font}`}>
                <i className="fs-4 bi-house mt-1"></i>{" "}
                <span
                  onClick={() => {
                    props.loginAC({
                      auth: false,
                      id: null,
                      name: null,
                      password: null,
                    });
                  }}
                  className="ms-1 d-none d-sm-inline text-white"
                >
                  {t("logout")}
                </span>
              </NavLink>
              </div>
            </div> 
          )}
          <div className="mt-3">
            <select
              className={`bg-${theme.bg} bg-gradient text-${theme.font} border-0`}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="row mt-2 d-flex justify-content-center align-items-center w-100">
            <div className="col w-25">
              <button
                className=" btn btn-outline-light border-0 rounded-circle"
                onClick={() => {
                  setTheme({bg:'dark',font:'white',border:'danger',btn:'dark'}, props.themeAC);
                }}
              >
                {MoonImg(30)}
              </button>
            </div>
            <div className="col w-25 ">
              <button
                className="btn btn-outline-warning border-0 rounded-circle"
                onClick={() => {
                  setTheme({bg:'info',font:'white',border:'dark',btn:'info'}, props.themeAC);
                }}
              >
                {SunImg(30)}
              </button>
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-center align-items-center w-100">
              <input
                className={`bg-${theme.bg} bg-gradient text-${theme.font}`}
                type="text"
                placeholder={t("Search")}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              className={`col w-100 border bg-${theme.border} bg-opacity-25 border-${theme.border} border-opacity-25 overflow-auto`}
              style={{ height: "100px" }}
            >
              {search ? (
                filteredData.map((el) => (
                  <div className="list-group">
                    <Link 
                      className={`list-group-item-action list-group-item-danger  text-${theme.font} text-decoration-none`} 
                      to={"/expand/" + el.id_r}>{el.title}</Link>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

/* https://www.codeply.com/p/WGCqYEiPBg code of sidebar*/
