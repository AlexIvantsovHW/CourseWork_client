import { deleteRate } from './Expand/Function';
import './style.css'

export function Raiting(title,date_upload,Amount,id_r,id_user,rate,setRateTC,avRate,rateDB){
  debugger;
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
          <button className={`btn btn-${status}`} onClick={()=>{setRate(id_r,id_user,rate,action)}}>{value}</button>
        )
      } 
    return(
      <div className="col">
        <div>Title: {title}</div>
        <div>Date: {date_upload}</div>
        <div>id_r:  {id_r}</div>
        <div>Likes:  {Amount}</div>
        <div>
          {elementPresence(rateDB,id_r,id_user,1)?btn(id_r,id_user,1,0,1,'warning'):btn(id_r,id_user,1,1,1,'success')}
          {elementPresence(rateDB,id_r,id_user,2)?btn(id_r,id_user,2,0,2,'warning'):btn(id_r,id_user,2,1,2,'success')}
          {elementPresence(rateDB,id_r,id_user,3)?btn(id_r,id_user,3,0,3,'warning'):btn(id_r,id_user,3,1,3,'success')}
          {elementPresence(rateDB,id_r,id_user,4)?btn(id_r,id_user,4,0,4,'warning'):btn(id_r,id_user,4,1,4,'success')}
          {elementPresence(rateDB,id_r,id_user,5)?btn(id_r,id_user,5,0,5,'warning'):btn(id_r,id_user,5,1,5,'success')}
            <p>Average Rate:{rate}</p>
         </div>
         </div>
    )
    }
