import React from "react";
import '../../style.css';
const SideBar = () => {
  return (
    <div className="sidebar">
    <a className="active" href="#home">Home</a>
    <a href="#news">Profile</a>
    <a href="#contact">Login</a>
    <a href="#about">Language</a>
  </div>
  );
};

export default SideBar;
