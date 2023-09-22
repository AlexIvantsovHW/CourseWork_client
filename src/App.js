import React from "react";
import "./style.css";
import "./i18n"
import { useTranslation } from 'react-i18next';
import RegistrationContainer from "./Component/Registration/RegistrationContainer";
import { Routes,Route } from "react-router-dom";
import LoginContainer from "./Component/Login/LoginContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import SidebarContainer from "./Component/SideBar/SidebarContainer";
import UserContainer from "./Component/User/UserContainer";
import MainContainer from "./Component/Main/MainContainer";
import FullRecommContainer from "./Component/Profile/FullRecommend/FullRecommContainer";
import ExpandContainer from "./Component/Main/Expand/ExpandContainer";
import AdminContainer from "./Component/Admin/AdminContainer";
import UserProfileContainer from "./Component/UserProfile/UserProfileContainer";
import FullUserRecommContainer from "./Component/UserProfile/FullRecommend/FullUserRecommContainer";

function App() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
      <SidebarContainer />
      <Routes>
            <Route path="/main" element={<MainContainer/>} />
            <Route path="/" element={<RegistrationContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/userprofile/:id" element={<UserProfileContainer />} />
            <Route path="/users" element={<UserContainer/>} />
            <Route path="/fullrecommend/:id" element={<FullRecommContainer/>} />
            <Route path="/fulluserRecommend/:id" element={<FullUserRecommContainer/>} />
            <Route path="/expand/:id" element={<ExpandContainer/>} />
            <Route path="/admin" element={<AdminContainer/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
