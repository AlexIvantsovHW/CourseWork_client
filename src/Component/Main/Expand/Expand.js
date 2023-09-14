import React from "react";
import { img_return } from "./../../img";
import { 
  addComment, 
  closeForm, 
  filterComments, 
  openForm, 
  userElement 
} from "../../CommonFunc";
import { calculateAverageRate, replaceAmountValues, replaceRateValues } from "./Function";
import '../../../i18n'
import { useTranslation } from 'react-i18next';

const Expand = (props) => {
  const recommendList = props.DB.recommendation,
        { t, i18n } = useTranslation(),
        averageRecommendationRate=calculateAverageRate(props.DB.rate),
        arrayWithAvRate=replaceRateValues(replaceAmountValues(props.DB.DB,props.DB.totalScore),averageRecommendationRate),
        targetId = arrayWithAvRate[0].id_r === null ? 0 :(typeof(arrayWithAvRate[0].id_r)==='string'?props.id_r.toString():+props.id_r),
        targetRecommendation = arrayWithAvRate.filter((rec) => rec.id_r === targetId);
  let filteredComments=filterComments(props.DB.comments,+props.id_r),
      statusComment=props.statusComment;
  return (
    <div class="col">
      <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="row mx-auto w-75 mr-1 h-auto bg-dark  bg-gradient rounded-4">
          <div className="row mb-2">
            <h1 className=" text-center">{targetRecommendation[0].title}</h1>
            <div className="w-100 text-center">
              <h4>
                {targetRecommendation[0].name} /
                {targetRecommendation[0].category} / 
                {t('Score')} : {targetRecommendation[0].rate}</h4>
              </div>
            <div className="col-4 h-100">
              {img_return(targetRecommendation[0].image, 250)}
            </div>
            <div
              className="col bg-light text-black overflow-auto"
              style={{ height: "250px" }}
            >
              <p>{targetRecommendation[0].text}</p>
            </div>
          </div>
          <div className="row d-flex justify-content-end align-items-center w-100"><p>{t('Date')}: {targetRecommendation[0].date_upload}</p></div>
          <div>
          {(props.DB.setView===false?
          <div className="d-flex justify-content-center">
            <a 
            className="text-center fst-italic text-decoration-none" 
            onClick={()=>{openForm(props.setViewAC)}}>
              {t('viewComment')}
            </a>
          </div>
          :
          <div>
           <div>
           <div className="d-flex justify-content-end">
              <button 
                className="btn btn-danger"
                onClick={()=>{closeForm(props.setViewAC)}}>X
              </button>
            </div>
            <div><h4 className="text-center">{t('Comments')}</h4></div>
           </div>
            <div
                className="container ml-2 d-grid gap-2  text-black  overflow-auto border"
                style={{ height: "120px", width: "95%",margin:'1.5%' }}>  
                {filteredComments.map((user)=>{return userElement(user.name,user.comment,user.date_upload,t)})}
            </div>
            {addComment(
                statusComment, 
                props.setCommentsTC,
                props.Login.auth.id,
                targetId,props.setCommentStatusAC,
                props.setViewAC
              )}
      </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;
