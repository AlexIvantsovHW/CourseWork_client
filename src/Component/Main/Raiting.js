import React, { useState } from 'react';
import { checkMatching } from './Expand/Function';
import './style.css'
import { startImg } from '../img';
import { useTranslation } from 'react-i18next';
import '../../i18n'

const ButtonComponent = (props) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (value) => {
    if (activeButton === value) {
      setActiveButton(null);
      props.setRate(props.id_r,props.id_user,value,0)
    } else {
      setActiveButton(value);
      if(checkMatching(props.RateDB, props.id_r, props.id_user, value)){
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

export const Raiting=(/* title,category,date_upload,Amount,id_r,id_user,rate,setRateTC,rateDB,t,i18n */props)=>{
  const { t, i18n } = useTranslation();
  function setRate(){
        const fData=new FormData();
        fData.append('id_r',props.id_r);
        fData.append('id_user',props.id_user);
        fData.append('rate',props.rate);
        fData.append('action',props.action);
        props.setRateTC(fData);
      } 
    const d=new Date((props.date))  
    return(
      <div className="col">
        <div>{t('RecommendationTitle')}: {props.title}</div>
        <div>{t('category')}: {props.category}</div>
        <div>{t('Date')}: {d.getDay()}/{d.getMonth()}/{d.getFullYear()}</div>
        <div>Likes:  {props.Amount}</div>
        <div>
          <ButtonComponent id_r={props.id_r} id_user={props.id_user} rate={props.rate} setRate={setRate} RateDB={props.RateDB}/>
          {`  ${Math.floor(props.rate * 100) / 100}`}
         </div>
         </div>
    )
    }