import React from "react";
import SideBar from "./Component/SideBar/Sidebar";
import "./style.css";
import RegistrationContainer from "./Component/Registration/RegistrationContainer";

function App() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <SideBar />
        <RegistrationContainer />
      </div>
    </div>
  );
}

export default App;
