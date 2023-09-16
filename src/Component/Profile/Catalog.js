import { NavLink } from "react-router-dom";
import {  Like } from "../img";
import { Checkbox, ImgReview } from "./Function";
import { calculateAverageRate, replaceAmountValues, replaceRateValues } from "../Main/Expand/Function";


export function getTags(data){

  let x=[];
  for (let i=0;i<data.length;i++){x.push(data[i].value)}
  return Array.from(new Set(x)).filter(Boolean);
}
export function catalog (array,isCheck,handleClick,Filter,rate,totalScore){
debugger;
let RecommendData = array,
    tagFilter =getTags(Filter),
    x=[''].concat(tagFilter),
     averageRecommendationRate=calculateAverageRate(rate),
    arrayWithAvRate=replaceRateValues(replaceAmountValues(RecommendData,totalScore),averageRecommendationRate), 
    filteredList = RecommendData.filter((o) => x.includes(o.tag)),
    recommendList =x.length > 1? filteredList: RecommendData;

    return(
    <div className="w-75 mx-auto mb-2 overflow-auto border border-danger  border-opacity-25" style={{ height: "300px" }}>
      {recommendList.map((el) => {
  return (
    <div className="row mt-3 text-white bg-dark bg-gradient rounded-pill border-bottom border-danger border-opacity-50">
      <div className="col-1 d-flex justify-content-center align-items-center">
        <Checkbox
          key={el.id_r}
          type="checkbox"
          name={el.name}
          id={el.id_r}
          handleClick={handleClick}
          isChecked={isCheck.includes(el.id_r)}
        />
      </div>
      <div className="col-1  d-flex justify-content-center align-items-center">{el.id_r}</div>
      <div className="col-3  mx-auto"><ImgReview  img={el.image} score={el.score} date={el.date}/>
      </div>
      <div className="col   text-white">
        <div className="row text-center"><h5 className="col">{el.title}</h5><div className="col">
    <NavLink to={"/fullrecommend/"+el.id_r}><button>Read</button></NavLink>
          </div></div>
        <div className="text-start font-weight-bold"><p>{el.name}/{el.category}/{el.group}</p></div>
        <div className="row"><div className="col-9">Tags:{el.tag}</div> <div className="col">{Like}</div></div>
      </div>
    </div>
  );
})}
      </div>
)
;}
