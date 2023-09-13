import React, { useState } from 'react';
import { checkMatching } from './Expand/Function';
import './style.css'
import { startImg } from '../img';

const ButtonComponent = (props) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (value) => {
    if (activeButton === value) {
      setActiveButton(null);
      props.setRate(props.id_r,props.id_user,value,0)
    } else {
      setActiveButton(value);
      if(checkMatching(props.rateDB, props.id_r, props.id_user, value)){
        props.setRate(props.id_r,props.id_user,value,0)
        setActiveButton(null);
      }else{
      props.setRate(props.id_r,props.id_user,value,1)
}    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
          <svg 
          key={value} disabled={activeButton !== null && activeButton !== value} 
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
          fill={activeButton === value ? 'green' : 'white'} className={`bi bi-star`}
          viewBox="0 0 16 16"
          onClick={() => handleButtonClick(value)}
          >
          <path d={startImg}/>
        </svg>
      ))}
    </div>
  );
};

export function Raiting(title,category,date_upload,Amount,id_r,id_user,rate,setRateTC,rateDB){
    const setRate=(id_r,id_user,rate,action)=>{
        const fData=new FormData();
        fData.append('id_r',id_r);
        fData.append('id_user',id_user);
        fData.append('rate',rate);
        fData.append('action',action);
        setRateTC(fData);
      } 
    return(
      <div className="col">
        <div>Title: {title}</div>
        <div>Category: {category}</div>
        <div>Date: {date_upload}</div>
        <div>id_r:  {id_r}</div>
        <div>Likes:  {Amount}</div>
        <div>
          <ButtonComponent id_r={id_r} id_user={id_user} rate={rate} setRate={setRate} rateDB={rateDB}/>
          {`  ${Math.floor(rate * 100) / 100}`}
         </div>
         </div>
    )
    }
      {/*  */}