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
    <div className="w-75 mx-auto mb-2 overflow-auto " style={{ height: "300px" }}>
      {recommendList.map((el) => {
  return (
    <div className={`row mt-3 text-${props.theme.font} bg-${props.theme.bg} bg-gradient rounded-pill border-bottom border-${props.theme.border} border-opacity-5`}>
      <div className="col-1 d-flex justify-content-center align-items-center">
        <Checkbox
          key={el.id_r}
          type="checkbox"
          name={el.name}
          id={el.id_r}
          handleClick={props.handleClick}
          isChecked={props.isCheck.includes(el.id_r)}
        />
      </div>
      <div className="col-1  d-flex justify-content-center align-items-center">{el.id_r}</div>
      <div className="col-3  mx-auto"><ImgReview  img={el.image} score={el.score} date={el.date}/>
      </div>
      <div className={`col text-${props.theme.font}`}>
        <div className="row text-center"><h5 className="col">{el.title}</h5><div className="col">
    <NavLink to={"/fullrecommend/"+el.id_r}>{ExpandImg(20)}</NavLink>
          </div></div>
        <div className="text-start font-weight-bold"><p>{el.name}/{el.category}/{el.group}</p></div>
        <div className="text-start font-weight-bold"><p>{props.t('AuthorScore')} {el.AuthorScore}</p></div>
        <div className="row"><div className="col-9">{props.t('Tag')}{el.tag}</div> <div className="col">{Like}</div></div>
      </div>
    </div>
  );
})}
      </div>
)
;}
