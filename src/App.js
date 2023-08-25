import React from "react";
import SideBar from "./Component/SideBar/Sidebar";
import "./style.css";
import RegistrationContainer from "./Component/Registration/RegistrationContainer";
import { Routes,Route } from "react-router-dom";
import LoginContainer from "./Component/Login/LoginContainer";


function App() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
      <SideBar />
      <Routes>
            <Route path="/registration" element={<RegistrationContainer />} />
            <Route path="/" element={<LoginContainer />} />
        
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
