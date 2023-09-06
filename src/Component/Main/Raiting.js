import { useState } from 'react';
import { deleteRate } from './Expand/Function';
import './style.css'

export function Raiting(title,date_upload,Amount,id_r,id_user,rate,setRateTC,avRate,rateDB){
    const setRate=(id_r,id_user,rate,action)=>{
        const fData=new FormData();
        fData.append('id_r',id_r);
        fData.append('id_user',id_user);
        fData.append('rate',rate);
        fData.append('action',action);
        setRateTC(fData);
      } 
      function elementPresence(arr, id_r, id_user,rate) {
        if (arr===undefined){return}
        return arr.some(el => el.id_r === id_r && 
        el.id_user === id_user && 
        el.rate===rate);}
      function btn(id_r,id_user,rate,action,value,status){
        return(
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${status}`} className={`bi bi-star`} viewBox="0 0 16 16" /* className={ `btn btn-${status}`} */ onClick={()=>{setRate(id_r,id_user,rate,action);}}>
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
          
        )
      } 
    return(
      <div className="col">
        <div>Title: {title}</div>
        <div>Date: {date_upload}</div>
        <div>id_r:  {id_r}</div>
        <div>Likes:  {Amount}</div>
        <div>

          {elementPresence(rateDB,id_r,id_user,1)?btn(id_r,id_user,1,0,1,'white'):btn(id_r,id_user,1,1,1,'$green-600')}
          {elementPresence(rateDB,id_r,id_user,2)?btn(id_r,id_user,2,0,2,'white'):btn(id_r,id_user,2,1,2,'$green-600')}
          {elementPresence(rateDB,id_r,id_user,3)?btn(id_r,id_user,3,0,3,'white'):btn(id_r,id_user,3,1,3,'$green-600')}
          {elementPresence(rateDB,id_r,id_user,4)?btn(id_r,id_user,4,0,4,'white'):btn(id_r,id_user,4,1,4,'$green-600')}
          {elementPresence(rateDB,id_r,id_user,5)?btn(id_r,id_user,5,0,5,'white'):btn(id_r,id_user,5,1,5,'$green-600')}
          {`  ${Math.floor(rate * 100) / 100}`}
         </div>
         </div>
    )
    }
      {/*  */}