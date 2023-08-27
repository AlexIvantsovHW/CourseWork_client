import React from "react";
import "./style.css";
import RegistrationContainer from "./Component/Registration/RegistrationContainer";
import { Routes,Route } from "react-router-dom";
import LoginContainer from "./Component/Login/LoginContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import SidebarContainer from "./Component/SideBar/SidebarContainer";
import UserContainer from "./Component/User/UserContainer";


function App() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
      <SidebarContainer />
      <Routes>
            <Route path="/" element={<RegistrationContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/users" element={<UserContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
