import React, { useState } from 'react';
import { checkMatching, likePresence, setLike } from './Expand/Function';
import './style.css'
import { Like, dislike, startImg } from '../img';
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { blockRender } from '../withAuthNavigate';

const ButtonComponent = (props) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (value) => {
    if (activeButton === value) {
      setActiveButton(null);
      const fData=new FormData();
        fData.append('id_r',props.id_r);
        fData.append('id_user',props.id_user);
        fData.append('rate',value);
        fData.append('action',0);
        props.setRateTC(fData);
    } else {
      setActiveButton(value);
      if(checkMatching(props.RateDB, props.id_r, props.id_user, value)){
        const fData=new FormData();
        fData.append('id_r',props.id_r);
        fData.append('id_user',props.id_user);
        fData.append('rate',value);
        fData.append('action',0);
        props.setRateTC(fData);
        setActiveButton(null);
      }else{
        const fData=new FormData();
        fData.append('id_r',props.id_r);
        fData.append('id_user',props.id_user);
        fData.append('rate',value);
        fData.append('action',1);
        props.setRateTC(fData);
      
}    }
  };

  return (
    <div className='mx-5'>
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
      {`  ${Math.floor(props.rate * 100) / 100}`}
    </div>
  );
};

export const Raiting=(props)=>{
  const [action,setAction]=useState(0)

  debugger;
  const { t, i18n } = useTranslation();
    const d=new Date((props.date))  
    return(
      <div className={`col text-${props.theme.font}`}>
        <div className='col mx-5 text-center'><h4>{props.title}</h4></div>
        <div className='col mx-5'>{props.name}</div>
        <div className='col mx-5'>{props.category}</div>
        <div className='col mx-5'>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</div>
        <div>        
           {blockRender(props.auth,
          <div className="row mx-4 d-flex align-items-start justify-content-start">
            <div className='w-25'>
              {(props.id_user!=null?
              (likePresence(props.score, props.id_r, props.id_user)===true)?
              <div className='col'>
                <button 
                className={` btn btn-outline-${props.theme.border} border-0`} 
                onClick={()=>{debugger;props.setLike(0,props.id_r,props.id_user,props.getLikeTC)}}>
                {dislike(20)} 
              </button>
              {props.Amount}
              </div>:
            <div className='col'>
              <button 
                className=' btn btn-outline-success border-0' 
                onClick={()=>{debugger;setLike(1,props.id_r,props.id_user,props.getLikeTC)}}>
                {Like(20)} 
              </button>
              {props.Amount}
              </div>:<div className='col mx-5'>{Like(20)} {props.Amount}</div>)

                }
            </div>
          </div>          
          )
          } 
        </div>
        <div>
        {(props.id_user!=null?
        <ButtonComponent 
          id_r={props.id_r} 
          id_user={props.id_user} 
          rate={props.rate} 
          RateDB={props.RateDB}
          setRateTC={props.setRateTC}/>
          :
          <div className='col mx-5'>{Like(20)} {props.Amount}</div>
          )}
         </div>
         </div>
    )
    }