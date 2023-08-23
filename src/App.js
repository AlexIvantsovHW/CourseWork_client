import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar/Sidebar";
import './style.css'
import RegistrationContainer from "./Component/Registration/RegistrationContainer";

function App() {
  debugger;
  return (
    <div className="mainContainer">
      <SideBar/>
      <div className="content fluid"><RegistrationContainer/></div>
    </div>
  );
}

export default App;
