import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";



const Admin = (props) => {

  function tD (el,id,status){let x;(status!='Active'?x='bg-light':x='bg-success');return (
    (id? (<td className={x}>
      <NavLink to={"/profile/"+el}>
       <p className="fw-bold">{el}</p>
       </NavLink>
       </td>):
  (<td className={x}>{el}</td>)))};
let UserData=props.Users.users.map((el, index) => (
            <tr key={index} >
              {tD(el.id,el.id,null)}
              {tD(el.name,null,null)}
              {tD(el.email,null,null)}
              {tD(el.password,null,null)}
            </tr>
          ))


  return (
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
        <div className="mb-2">
          <h1 className="text-center">Admin page</h1>
        <div className="border w-100 mx-auto mb-2 overflow-auto" style={{ height: "500px" }}>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody >
          {UserData}
          </tbody>
      </table>
        </div>
        </div>

        </div>
        
      </div>
</div>

    
  );
};

export default Admin;
