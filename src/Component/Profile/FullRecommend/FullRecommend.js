import React from "react";
import { update } from "./FormikFunc";
import Comment from "./Comment/Comment";
import { useTranslation } from 'react-i18next';
import '../../../i18n'
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import { PhotoImg, SendImg, img_return } from "../../img";

const FullRecommend = (props) => {
  const [ value, setValue ] = useState(0); 
  const { t, i18n } = useTranslation();
  let status = props.status,
      Theme=props.Theme.theme,
      statusComment=props.statusComment,
      recommendList = props.Recommendation.recommendation,
      targetId = props.id_r,
      targetRecommendation = recommendList.filter((rec) => parseInt(rec.id_r) === parseInt(targetId)),
      IMG=targetRecommendation[0].image;
  const onAuthorScoreSubmit=() => {
       const fData=new FormData();
        fData.append('id_r',(+targetId));
        fData.append('id_user',(+targetRecommendation[0].id_user));
        fData.append('AuthorScore',+value)
        props.setAuthorScoreTC(fData);
      };
  return (
    <div class="col">
      <div className={`row h-100 d-flex align-items-center text-${Theme.font} bg-${Theme.bg} bg-gradient`}>
        <div className={`mx-auto w-75 h-auto bg-${Theme.bg} border-${Theme.border} border rounded-4  border-opacity-50`}>
          <div className="row mb-2">
            <h3 className="text-center">{targetRecommendation[0].title}</h3>
            <div className="col-3 mt-2 d-flex justify-content-center align-items-center">
            {((IMG===null)||(IMG==='null')||(IMG==='')?PhotoImg(200):img_return(IMG,200))}
            </div>
            <div 
              className={`col d-flex align-items-center justify-content-center me-2 ms-2 bg-${Theme.bg} bg-gradient text-${Theme.font} overflow-auto`} 
              style={{ height: "200px"}}>
              <p className="mt-2">{targetRecommendation[0].text}</p>
            </div>
            <div>
            <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className={`w-25 text-center text-${Theme.font}`}>
              {t('AuthorScore')} {targetRecommendation[0].AuthorScore} 
            </div>
            <div className="row w-50 d-flex flex-row align-items-center justify-content-center">
            <RangeSlider
              className="col"
              variant={`${Theme.border}`}
              size='sm'
              value={value}
              min={1}
              max={10}
              onChange={changeEvent => setValue(changeEvent.target.value)}
             />
              <div className="w-75 d-flex justify-content-center align-items-center">
              <button className={`btn btn-${Theme.btn}`} onClick={onAuthorScoreSubmit}>
                {SendImg(20)} {t('Assess')}
              </button>
              </div>
             </div>
            </div>
            </div>
          <Comment 
                statusComment={statusComment} getUpdateTC={props.getUpdateTC}
                id_user={targetRecommendation[0].id_user}
                targetId={targetId}
                setCommentStatusAC={props.setCommentStatusAC}
                setViewAC={props.setViewAC}
                statusView={props.statusView}
                comments={props.Recommendation.comments}
                setCommentsTC={props.setCommentsTC}
                Theme={Theme}
              />
            <div className="mx-auto">
              {update(
                status, 
                props.getUpdateTC,
                targetRecommendation[0].id_user,
                targetId,
                props.setUpdateAC,
                Theme,
                t, i18n, 
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullRecommend;
