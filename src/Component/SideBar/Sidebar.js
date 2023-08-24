import React from "react";
import './style.css'
function formBar(name) {
  return (
    <li className="nav-item">
    <a href="#" className="nav-link align-middle px-0">
      <i className="fs-4 bi-house"></i>{" "}
      <span className="ms-1 d-none d-sm-inline">{name}</span>
    </a>
  </li>
  );
}
const SideBar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark  bg-gradient">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Logotip</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          
          {formBar('Home')}
          {formBar('User page')}
          {formBar('Language')}
          {formBar('Theme')}
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

/* https://www.codeply.com/p/WGCqYEiPBg code of sidebar*/