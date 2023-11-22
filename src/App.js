import React from "react";
import "./style.css";
import "./i18n"
import { useTranslation } from 'react-i18next';
import { Routes,Route } from "react-router-dom";
import ProfiePage from "./Component/Page/ProfiePage";

function App() {
  return (
    <div class="container-fluid" style={{height:'100vh',width:'100vw'}}> 
      <ProfiePage/>
    </div>
  );
}

export default App;
