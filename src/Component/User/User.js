import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";



const User = (props) => {
let theme=props.Theme.theme;
let UserData=props.Users.users.map((el)=>{
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
          {UserData}
        </div>
        </div>

        </div>
        
      </div>
</div>

    
  );
};

export default User;
