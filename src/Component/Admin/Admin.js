import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Checkbox, searchLink } from "../CommonFunc";
import '../../i18n'
import { useTranslation } from 'react-i18next';


const Admin = (props) => {
  const { t, i18n } = useTranslation();
  function transformData(arr){
    for(let i=0;i<arr.length;i++){
      arr[i].id=String(arr[i].id)
    }
  }
  const userData=transformData(props.Users.users);
  const [search,setSearch]=useState('');
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(props.Users.users);
  }, [list]);
  function deleteUser(isCheck){
    let users={data:isCheck}    
    props.deleteUserTC(users)
  }
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  function tD (el,id,status){let x;(status!='Active'?x='bg-light':x='bg-success');return (
    (id? (<td className={x}>
      <NavLink to={"/profile/"+el}>
       <p className="fw-bold">{el}</p>
       </NavLink>
       </td>):
  (<td className={x}>{el}</td>)))};
let filteredData=searchLink(search,props.Users.users),
     UserData=filteredData.map((el, index) => (
            <tr key={index} >
              <td>        
                <Checkbox
                  key={el.id}
                  type="checkbox"
                  name={el.name}
                  id={el.id}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(el.id)}
                />
            </td>
              {tD(el.id,el.id,null)}
              {tD(el.name,null,null)}
              {tD(el.email,null,null)}
              {tD(el.password,null,null)}
            </tr>
          ))
  return (
    <div class="col">
     <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4">
        <div className="mb-2">
          <h1 className="text-center">{t('Admin')}</h1>
          <div className="d-flex justify-content-center align-items-center w-100">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
          <div className="w-100">
            <div><button onClick={()=>deleteUser(isCheck)} className="btn btn-danger">del</button></div>
          </div>
        <div className="border w-100 mx-auto mb-2 overflow-auto" style={{ height: "500px" }}>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">
            <Checkbox 
                  type="checkbox" name="selectAll" 
                  id="selectAll" handleClick={handleSelectAll} 
                  isChecked={isCheckAll}/>
            </th>
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
