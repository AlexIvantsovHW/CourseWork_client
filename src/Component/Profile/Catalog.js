import { NavLink } from "react-router-dom";
import {  ExpandImg, Like } from "../img";
import { Checkbox, ImgReview } from "./Function";
import { calculateAverageRate, replaceAmountValues, replaceRateValues } from "../Main/Expand/Function";
export function getTags(data){
  let x=[];
  for (let i=0;i<data.length;i++){x.push(data[i].value)}
  return Array.from(new Set(x)).filter(Boolean);
}
export const Catalog=(props)=>{

let RecommendData = props.list,
    tagFilter =getTags(props.Filter),
    x=[''].concat(tagFilter),
     averageRecommendationRate=calculateAverageRate(props.rate),
    arrayWithAvRate=replaceRateValues(replaceAmountValues(RecommendData,props.totalScore),averageRecommendationRate), 
    filteredList = RecommendData.filter((o) => x.includes(o.tag)),
    recommendList =x.length > 1? filteredList: RecommendData;

    return(
      recommendList.map((el) => {
        const d=new Date((el.date_upload));  
  return (
    <div className={`w-75 mt-3 bg-${props.theme.bg} mx-auto bg-gradient rounded-pill border-bottom border-${props.theme.border} border-opacity-50`}>
    <div className={`row`}>
      <div className="text-center">
        <div className="row">
          <div className="col-1 ms-2 d-flex justify-content-center align-items-center">
          <Checkbox
            key={el.id_r}
            type="checkbox"
            name={el.name}
            id={el.id_r}
            handleClick={props.handleClick}
            isChecked={props.isCheck.includes(el.id_r)}
        />
          </div>
          <div className="col">
            <h5 className={`col text-${props.theme.font}`}>{el.title}</h5>
            <p className={`col text-${props.theme.font}`}>{el.name}</p>
            <p className={`col text-${props.theme.font}`}>{el.category}</p>
            <p className={`col text-${props.theme.font}`}>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</p>
            <p className={`col text-${props.theme.font}`}> {props.t('Tag')}{el.tag}</p>
            </div>
          <div className="col d-flex align-items-center justify-content-center flex-column">
          <ImgReview  img={el.image} score={el.score} date={el.date}/>
          <p>{props.t('AuthorScore')} {el.AuthorScore}</p>
          <NavLink className={'text-decoration-none'} to={"/fullrecommend/"+el.id_r}>
            <p className={`text-center text-${props.theme.font} fw-bold`}>
              {props.t('Read')}
            </p>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
})
   
)
;}
