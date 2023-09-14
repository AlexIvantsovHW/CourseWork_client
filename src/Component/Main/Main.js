import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { calculateAverageRate, replaceAmountValues, replaceRateValues,sort,chooseCategory } from "./Expand/Function";
import MainTagList from './MainTag/MainTagList';
import { getTags } from "../Profile/Catalog";
import { DBlist } from "./DBlist";
import { useTranslation } from 'react-i18next';
import '../../i18n'
const Main = (props) => {
  const { t, i18n } = useTranslation();
  const [category,setCategory]=useState(''),
         theme=props.Theme.theme;
let averageRecommendationRate=calculateAverageRate(props.Recommendation.rate),
    arrayWithAvRate=replaceRateValues(replaceAmountValues(props.DB,props.totalScore),averageRecommendationRate),
    categoryFilteredData=(category?arrayWithAvRate.filter((el)=>el.category===category):arrayWithAvRate), 
    tagFilter =getTags(props.Recommendation.Filter),
    x=[''].concat(tagFilter),
    filteredList = categoryFilteredData.filter((o) => x.includes(o.tag)),
    recommendList =x.length > 1? filteredList: categoryFilteredData;    
  return (
    <div class="col">
      <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
      <MainTagList
                Theme={theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={props.Recommendation.recommendation}
            />
        <div className={`mx-auto w-50 h-auto bg-${theme}  bg-gradient rounded-4`}>
          <div className="mb-2">
            <h1 className="text-center">{t('RecommendationHeader')}</h1>
            <div className="row w-100 mx-auto" style={{ height: "30px" }}>
              <div className="col"><button onClick={()=>chooseCategory('Book',category,setCategory)}>{t('Book')}</button></div>
              <div className="col"><button  onClick={()=>chooseCategory('Film',category,setCategory)}>{t('Film')}</button></div>
              <div className="col"><button  onClick={()=>chooseCategory('Music',category,setCategory)}>{t('Music')}</button></div>
            </div>
            <div className="row w-100 mx-auto" style={{ height: "30px" }}>
                <div className="col-2">{t('Sort')}:</div>
                <div className="col-4">
                  {t('Date')}
                  <button onClick={() => {sort("ASC", "date_upload",props.getSortTC);}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "date_upload",props.getSortTC);}}>{'>'}</button>
                </div>
                <div className="col-4">
                  {t('Score')}
                  <button onClick={() => {sort("ASC", "score",props.getSortTC);}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "score",props.getSortTC);}}>{'>'}</button>
                </div>
              </div>
            <div className="w-100 mx-auto mb-2 overflow-auto" style={{ height: "500px" }}>
              {DBlist(
                recommendList,props.id_user,
                props.setRateTC,
                averageRecommendationRate,
                props.Recommendation.rate,
                props.Login.auth.auth,props.score,
                props.getLikeTC,
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
