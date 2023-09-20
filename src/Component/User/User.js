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
        <div className={`w-75 bg-${theme.bg} rounded-4 border border-${theme.border}`}>
        <div className="w-100 mt-2 d-flex justify-content-center align-items-center">{UserImg(50)}</div>
        <div className="w-100 d-flex justify-content-center align-items-center">
        <NavLink className='text-decoration-none' to={"/userprofile/"+el.id}><p className={`text-${theme.font} fw-bold`}>{el.name}</p></NavLink><p> / id- {el.id}</p></div>
        </div>
      </div>
  )
})

  return (
    <div class="col">
     <div className={`row h-100 d-flex align-items-center text-white bg-${theme.bg} bg-gradient`}>
        <div className={`col-10 col-sm-8 col-md-8 col-lg-6 mx-auto h-auto bg-${theme.bg} overflow-auto rounded-4 border border-${theme.border} border-opacity-50`} >
        <div className="mb-2">
          <h4 className={`text-center text-${theme.font}`}>{t('Users')}</h4>
        <div>
          <div className="d-flex justify-content-center align-items-center w-100 mt-2 mb-2" >
            <input className={`bg-${theme.bg} bg-gradient text-${theme.font}`} type="text" placeholder={t('Search')} onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
          <div className={`w-100 d-flex flex-column align-items-center bg-${theme.bg} bg-gradient overflow-auto`} style={{ maxHeight: "500px" }}>
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
