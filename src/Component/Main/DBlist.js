
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
    getLikeTC)
    {
      const { t, i18n } = useTranslation();
    return(
        arr.map((el) => {
            return (
              <div className="row mt-5 bg-dark bg-gradient rounded-pill border-bottom border-danger border-opacity-50">
                  <Raiting
                    title={el.title} category={el.category}
                    date={el.date_upload} Amount={el.Amount}
                    id_r={el.id_r} id_user={id_user} rate={el.rate}
                    setRateTC={setRateTC}
                    averageRecommendationRate={averageRecommendationRate}
                    RateDB={rate}
                    score={score}
                    id_user_el= {el.id_user}
                    getLikeTC={getLikeTC}
                    setLike={setLike}
                    auth={auth}
                    />
                <div className="col-2 d-flex justify-content-center align-items-center h-100">
                {((el.image===null)||(el.image==='null')?Camera:img_return(el.image))}
                </div>
                <div className="col-1 me-4">
                <NavLink to={"/expand/"+el.id_r}><button className='btn btn-outline-primary border-0'>{ExpandImg(20)}</button></NavLink>
                </div>
              </div>
            );
          })
    )
}