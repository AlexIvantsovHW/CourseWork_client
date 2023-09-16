import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { searchLink } from "../CommonFunc";
import '../../i18n'
import { useTranslation } from 'react-i18next';
import { UserImg } from './../img';


const User = (props) => {
const [search,setSearch]=useState('');
let theme=props.Theme.theme,
    { t, i18n } = useTranslation(),
    searchUsers=searchLink(search,props.Users.users),
    usersExceptAdmin=searchUsers.filter((el)=>el.name!='Admin'),
    UserData=usersExceptAdmin.map((el)=>{
  return(
    <div className="mt-2 w-100 d-flex justify-content-center align-items-center">
        <div className="w-25 bg-dark rounded-4 border">
        <div className="w-100 mt-2 d-flex justify-content-center align-items-center">{UserImg(60)}</div>
        <div className="w-100 d-flex justify-content-center align-items-center">
        <NavLink to={"/userprofile/"+el.id}><p>{el.name}</p></NavLink><p> / id- {el.id}</p></div>
        </div>
      </div>
  )
})

  return (
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className={`mx-auto w-50 h-auto bg-${theme} overflow-auto rounded-4`} >
        <div className="mb-2">
          <h1 className="text-center">{t('Users')}</h1>
        <div>
          <div className="d-flex justify-content-center align-items-center w-100 mt-2 mb-2" >
            <input className={`bg-${theme} bg-gradient text-info`} type="text" placeholder={t('Search')} onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
          <div className={`w-100 d-flex flex-column align-items-center bg-${theme} bg-gradient overflow-auto`} style={{ height: "500px" }}>
          {UserData}
          </div>
        </div>
        </div>

        </div>
        
      </div>
</div>

    
  );
};

export default User;
