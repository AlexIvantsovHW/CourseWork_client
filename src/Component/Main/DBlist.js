
import { NavLink } from 'react-router-dom';
import { blockRender } from '../withAuthNavigate';
import { Camera, ExpandImg, Like, dislike, img_return } from './../img';
import { likePresence, setLike } from './Expand/Function';
import { Raiting } from './Raiting';
import { useTranslation } from 'react-i18next';
import '../../i18n'

export function DBlist(
    arr,id_user,setRateTC,
    averageRecommendationRate,
    rate,auth,score,
    getLikeTC,theme)
    {
      const { t, i18n } = useTranslation();
    return(
        arr.map((el) => {
            return (
              <div className="row mt-5 bg-dark bg-gradient rounded-pill border-bottom border-danger border-opacity-50">
                  <Raiting
                    title={el.title} category={el.category}
                    name={el.name}
                    date={el.date_upload} 
                    Amount={el.Amount}
                    id_r={el.id_r} id_user={id_user} rate={el.rate}
                    setRateTC={setRateTC}
                    averageRecommendationRate={averageRecommendationRate}
                    RateDB={rate}
                    score={score}
                    id_user_el= {el.id_user}
                    getLikeTC={getLikeTC}
                    setLike={setLike}
                    auth={auth}
                    theme={theme}
                    />
                <div className="col-2 ">
                <div className='h-100  d-flex justify-content-center align-items-center'>
                {((el.image===null)||(el.image==='null')?Camera:img_return(el.image))}
                </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                <NavLink to={"/expand/"+el.id_r}><button className='btn btn-outline-primary border-0 d-flex justify-content-center align-items-center'>{ExpandImg(20)}</button></NavLink>
                </div>
              </div>
            );
          })
    )
}