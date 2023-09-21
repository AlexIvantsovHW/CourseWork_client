import { NavLink } from "react-router-dom";
import { ImgReview } from "./Function";
import { calculateAverageRate, replaceAmountValues, replaceRateValues } from "../Main/Expand/Function";


export function getTags(data){
  let x=[];
  for (let i=0;i<data.length;i++){x.push(data[i].value)}
  return Array.from(new Set(x)).filter(Boolean);
}
export function catalog (array,isCheck,handleClick,Filter,rate,totalScore,id_user,theme,t){
let RecommendData = array,
    tagFilter =getTags(Filter),
    x=[''].concat(tagFilter),
     averageRecommendationRate=calculateAverageRate(rate),
    arrayWithAvRate=replaceRateValues(replaceAmountValues(RecommendData,totalScore),averageRecommendationRate), 
    filteredList = RecommendData.filter((o) => x.includes(o.tag)),
    recommendList =x.length > 1? filteredList: RecommendData;

    return(
      <div 
      className="w-100 mx-auto mb-2 overflow-x-hidden overflow-y-auto" 
      style={{ maxHeight: "300px" }}>
      {recommendList.map((el) => {
        const d=new Date((el.date_upload));  
  return (
    <div 
      className={`mt-3 bg-dark mx-auto bg-gradient rounded-pill border-bottom border-${theme.border} border-opacity-50`}
      style={{width:'90%'}}
      >
      <div className="row">
        <div className="text-center">
          <div className="row">
          <div className="col">
            <p className={`col text-${theme.font} fw-bold`}>{el.title}</p>
            <p className={`col text-${theme.font}`}>{el.name}</p>
            <p className={`col text-${theme.font}`}>{el.category}</p>
            <p className={`col text-${theme.font}`}>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</p>
            <p className={`col text-${theme.font}`}> {t('Tag')}{el.tag}</p>
          </div>
          <div 
            className="col-5 d-flex align-items-center justify-content-center flex-column">
            <ImgReview  img={el.image} score={el.score} date={el.date}/>
            <p>{t('AuthorScore')} {el.AuthorScore}</p>
            <NavLink className={'text-decoration-none'} to={"/expand/"+el.id_r}>
              <p className={`text-center text-${theme.font} fw-bold`}>
              {t('Read')}
              </p>
            </NavLink>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
})}
      </div>
)
;}
