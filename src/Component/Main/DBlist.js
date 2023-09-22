
import { NavLink } from 'react-router-dom';
import { PhotoImg, img_return } from './../img';
import { setLike } from './Expand/Function';
import { Raiting } from './Raiting';
import { useTranslation } from 'react-i18next';
import '../../i18n'
import LikeComponent from '../LikeComponent';

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
              <div className={`w-75 mt-5 bg-dark mx-auto bg-gradient rounded-pill border-bottom border-${theme.border} border-opacity-50`}>
                <div className='row'>
                <div className='col mx-auto'>
                  <div className='text-center'>
                  <Raiting
                    title={el.title} 
                    category={el.category}
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
                  </div>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                <div>
                {((el.image===null)||(el.image==='null')||(el.image==='')?PhotoImg(75):img_return(el.image,50))}
                <div>
                  {auth?<LikeComponent
                  score={score} 
                  id_user={el.id_user}
                  id_r={el.id_r}
                  getLikeTC={getLikeTC}
                  Amount={el.Amount}
                  theme={theme}
                  />:null}
                  </div>                  
                <NavLink className={'text-decoration-none'} to={"/expand/"+el.id_r}>
                    <p className={`text-center text-${theme.font} fw-bold`}>
                    {t('Read')}
                    </p>
                </NavLink>
                </div>
                </div>
                </div>
           </div>
            );
          })
    )
}