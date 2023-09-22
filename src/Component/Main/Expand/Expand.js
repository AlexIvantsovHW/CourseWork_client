import React from "react";
import { PhotoImg, img_return } from "./../../img";
import { filterComments, } from "../../CommonFunc";
import { calculateAverageRate, replaceAmountValues, replaceRateValues } from "./Function";
import '../../../i18n'
import { useTranslation } from 'react-i18next';
import Comment from "./Comment/Comment";

const Expand = (props) => {
  const recommendList = props.DB.recommendation,
        Theme=props.Theme.theme,
        { t, i18n } = useTranslation(),
        averageRecommendationRate=calculateAverageRate(props.DB.rate),
        arrayWithAvRate=replaceRateValues(replaceAmountValues(props.DB.DB,props.DB.totalScore),averageRecommendationRate),
        targetId = arrayWithAvRate[0].id_r === null ? 0 :(typeof(arrayWithAvRate[0].id_r)==='string'?props.id_r.toString():+props.id_r),
        targetRecommendation = arrayWithAvRate.filter((rec) => rec.id_r === targetId),
        IMG=targetRecommendation[0].image;
  let filteredComments=filterComments(props.DB.comments,+props.id_r),
      statusComment=props.statusComment;
      const d=new Date((targetRecommendation[0].date_upload)); 
  return (
    <div class="col">
      <div className={`row h-100 d-flex align-items-center text-${Theme.font} bg-${Theme.bg} bg-gradient`}>
        <div className={`row mx-auto w-75 mr-1 h-auto bg-${Theme.bg} rounded-4  border-${Theme.border} border border-opacity-50`}>
          <div className="row mb-2">
            <h1 className=" text-center">{targetRecommendation[0].title}</h1>
            <div className="w-100 text-center mb-2">
              <h4>
                {targetRecommendation[0].name} /
                {targetRecommendation[0].category} / 
                {t('Score')} : {targetRecommendation[0].rate}
              </h4>
              </div>
            <div className="row w-100">
            <div className="col-4 d-flex justify-content-center align-items-center">
              {((IMG===null)||(IMG==='null')||(IMG==='')?PhotoImg(200):img_return(IMG,200))}
              </div>
            <div
              className={`col mx-auto bg-${Theme.bg} bg-gradient text-${Theme.font} overflow-auto border-${Theme.border} border border-opacity-50`}
              style={{ height: "200px", width:'90%'}}
            >
              <p>{targetRecommendation[0].text}</p>
            </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end align-items-center w-100">
            <p className={`text-${Theme.font}`}>{t('Date')}: {d.getDay()}/{d.getMonth()}/{d.getFullYear()}</p>
            <p className={`text-${Theme.font}`}>{t('AuthorScore')} {targetRecommendation[0].AuthorScore}</p>
          </div>
          <div className="w-100">
          <Comment
            Theme={Theme}
            targetId={targetId}
            id_user={props.Login.auth.id}
            comments={props.DB.comments}
            setCommentsTC={props.setCommentsTC}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;