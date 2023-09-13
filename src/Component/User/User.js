import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { searchLink } from "../CommonFunc";



const User = (props) => {
const [search,setSearch]=useState('');
let theme=props.Theme.theme,
    searchUsers=searchLink(search,props.Users.users),
    usersExceptAdmin=searchUsers.filter((el)=>el.name!='Admin'),
    UserData=usersExceptAdmin.map((el)=>{
  return(
    <div>
        <div>Id- {el.id}</div>
        <div>Name- <NavLink to={"/profile/"+el.id}>{el.name}</NavLink></div>
      </div>
  )
})

  return (
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className={`mx-auto w-50 h-auto bg-${theme}  bg-gradient rounded-4`}>
        <div className="mb-2">
          <h1 className="text-center">User</h1>
        <div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
          {UserData}
        </div>
        </div>

        </div>
        
      </div>
</div>

    
  );
};

export default User;
