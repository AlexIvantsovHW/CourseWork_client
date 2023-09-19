import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { calculateAverageRate, replaceAmountValues, replaceRateValues,sort,chooseCategory } from "./Expand/Function";
import MainTagList from './MainTag/MainTagList';
import { getTags } from "../Profile/Catalog";
import { DBlist } from "./DBlist";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { BookImg, DateSort, FilmImg, SortBy, SortDown, SortRateDown, SortRateUp, SortUp } from "../img";
import { MusicImg } from './../img';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import RangeSlider from "react-bootstrap-range-slider";


const Main = (props) => {
  const [ value, setValue ] = useState(0); 
  const [asc,setASC]=useState(true)
  const { t, i18n } = useTranslation();
  const [category,setCategory]=useState(''),
         theme=props.Theme.theme;
let averageRecommendationRate=calculateAverageRate(props.Recommendation.rate),
    arrayWithAvRate=replaceRateValues(replaceAmountValues(props.DB,props.totalScore),averageRecommendationRate),
    categoryFilteredData=(category?arrayWithAvRate.filter((el)=>el.category===category):arrayWithAvRate), 
    tagFilter =getTags(props.Recommendation.Filter),
    x=[''].concat(tagFilter),
    filteredList = categoryFilteredData.filter((o) => x.includes(o.tag)),
    recommendList =x.length > 1? filteredList: categoryFilteredData,
    RangeRecommendList=recommendList.slice(0,value)    
  return (
    <div class="col container-fluid">
      <div className={`row h-100 d-flex align-items-center text-${theme.font} bg-${theme.bg} bg-gradient`}>
      <MainTagList
                Theme={theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={props.Recommendation.recommendation}
            />
        <div className={`mx-auto w-50 h-auto bg-${theme.bg} border-${theme.border} border border-opacity-50 rounded-4`}>
          <div className="mb-2">
            <h1 className="text-center">{t('RecommendationHeader')}</h1>
            <div className={`row w-50 mx-auto text-center text-${theme.font}`} style={{ height: "50px" }}>
            <div>{t('RecommendRange')}</div>
            <RangeSlider
              variant={`${theme.border}`}
              size='sm'
              value={value}
              min={1}
              max={recommendList.length}
              onChange={changeEvent => setValue(changeEvent.target.value)}
             />
            </div>
            <div className={`row w-100 mx-auto border-bottom border-${theme.border} border-3`} style={{ height: "50px" }}>
              <div className="w-100 d-flex justify-content-around">
              <button className={`btn btn-${theme.btn}`} onClick={()=>chooseCategory('Book',category,setCategory)}>{BookImg(20)}</button>
              <button className={`btn btn-${theme.btn}`} onClick={()=>chooseCategory('Film',category,setCategory)}>{FilmImg(20)}</button>
              <button  className={`btn btn-${theme.btn}`} onClick={()=>chooseCategory('Music',category,setCategory)}>{MusicImg(20)}</button>
              <button className={`btn btn-${theme.btn}`} onClick={() => {sort( "date_upload",props.getSortTC,asc,setASC);}}>{DateSort(20)}</button>
              <button className={`btn btn-${theme.btn}`} onClick={() => {sort( "score",props.getSortTC,asc,setASC);}}>{(asc?SortRateDown(20):SortRateUp(20))}</button>
              </div>
            </div>           
            <div 
              className="w-100 mx-auto mb-2 overflow-x-hidden overflow-y-auto" 
              style={{ height: "500px" }}>
              {DBlist(
                RangeRecommendList,props.id_user,
                props.setRateTC,
                averageRecommendationRate,
                props.Recommendation.rate,
                props.Login.auth.auth,props.score,
                props.getLikeTC,
                theme
      )}
          <div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
