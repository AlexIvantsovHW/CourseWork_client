
import { NavLink } from 'react-router-dom';
import { blockRender } from '../withAuthNavigate';
import { Camera, img_return } from './../img';
import { likePresence, setLike } from './Expand/Function';
import { Raiting } from './Raiting';

export function DBlist(
    arr,id_user,setRateTC,
    averageRecommendationRate,
    rate,auth,score,
    getLikeTC)
    {
    return(
        arr.map((el) => {
            return (
              <div className="row border">
                  {Raiting(
                    el.title,el.category,el.date_upload,el.Amount,
                    el.id_r,id_user,el.rate,setRateTC,
                    averageRecommendationRate,rate)
                    }
                <div className="col">
                {((el.image===null)||(el.image==='null')?Camera:img_return(el.image))}
                </div>
                <div className="col-3 border">
                <NavLink to={"/expand/"+el.id_r}><button>Read</button></NavLink>
                {blockRender(auth,<div className="row d-flex align-items-end justify-content-end">
                  <div className="col">{
                  ((likePresence(score, el.id_r, el.id_user)===true)?<button onClick={()=>{setLike(0,el.id_r,id_user,getLikeTC)}}>dis</button>:
                  <button onClick={()=>{setLike(1,el.id_r,id_user,getLikeTC)}}>Like</button>)}</div>
                  </div>          
                  )}  
                </div>
              </div>
            );
          })
    )
}