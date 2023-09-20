import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Checkbox, searchLink } from "../CommonFunc";
import '../../i18n'
import { useTranslation } from 'react-i18next';
import { TrashImg } from "../img";


const Admin = (props) => {
  const { t, i18n } = useTranslation();
  const Theme=props.Theme.theme;
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
  function tD (el,id,isCheck){
    return (
    (id? (<td className={`bg-${Theme.bg} bg-gradient text-center`}>
      <NavLink className='text-decoration-none text-center' to={"/profile/"+el}>
       <p className={`fw-bold text-center text-${Theme.font}`}>{el}</p>
       </NavLink>
       </td>):
  (<td className={`bg-${Theme.bg} text-${Theme.font} bg-gradient text-center`}>{el}</td>)))};
let filteredData=searchLink(search,props.Users.users),
     UserData=filteredData.map((el, index) => (
            <tr key={index} >
              <td className={`bg-${Theme.bg} bg-gradient text-center`}>        
                <Checkbox
                  key={el.id}
                  type="checkbox"
                  name={el.name}
                  id={el.id}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(el.id)}
                />
            </td>
              {tD(el.id,el.id,isCheck)}
              {tD(el.name,null,isCheck)}
              {tD(el.email,null,isCheck)}
              {tD(el.password,null,isCheck)}
            </tr>
          ))
  return (
    <div class="col">
     <div className={`row h-100 d-flex align-items-center text-${Theme.font} bg-${Theme.bg} bg-gradient`}>
        <div className={`mx-auto w-75 h-auto bg-${Theme.bg} rounded-4 border border-${Theme.border} border-opacity-50`}>
        <div className="mb-2">
          <h3 className="text-center">{t('Admin')}</h3>
          <div className="d-flex justify-content-center align-items-center w-100">
            <input className={`bg-${Theme.bg} bg-gradient text-${Theme.font}`} type="text" placeholder={t('Search')} onChange={(e)=>setSearch(e.target.value)}/> 
          </div>
          <div className="w-100">
            <div>
              <button 
                onClick={()=>deleteUser(isCheck)} 
                className={`btn btn-${Theme.btn}`}>
                  {TrashImg(20)}
                </button>
              </div>
          </div>
        <div className="w-100 mx-auto mb-2 overflow-auto" style={{ height: "500px" }}>
        <table className="table">
        <thead className={`border-bottom-3 border-${Theme.border}`}>
          <tr>
            <th className={`bg-${Theme.border} bg-gradient text-center`} scope="col">
            <Checkbox 
                  type="checkbox" name="selectAll" 
                  id="selectAll" handleClick={handleSelectAll} 
                  isChecked={isCheckAll}/>
            </th>
            <th className={`bg-${Theme.border} bg-gradient text-center`} scope="col">id</th>
            <th className={`bg-${Theme.border} bg-gradient text-center`} scope="col">Name</th>
            <th className={`bg-${Theme.border} bg-gradient text-center`} scope="col">Email</th>
            <th className={`bg-${Theme.border} bg-gradient text-center`} scope="col">Password</th>
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
