import React from "react";
import { update } from "./FormikFunc";
import Comment from "./Comment/Comment";
import { useTranslation } from 'react-i18next';
import '../../../i18n'
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import { useEffect } from "react";
import { SendImg } from "../../img";

const FullRecommend = (props) => {
  debugger;
  const [ value, setValue ] = useState(0); 
  const { t, i18n } = useTranslation();
  let status = props.status,
      Theme=props.Theme.theme,
      statusComment=props.statusComment,
      recommendList = props.Recommendation.recommendation,
      targetId = props.id_r,
      targetRecommendation = recommendList.filter((rec) => parseInt(rec.id_r) === parseInt(targetId));
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
            <h1 className="text-center">{targetRecommendation[0].title}</h1>
            <div className="col-3">Img</div>
            <div className={`col-8 bg-${Theme.bg} bg-gradient text-${Theme.font} overflow-auto`} style={{ height: "200px" }}>
              <p>{targetRecommendation[0].text}</p>
            </div>
            <div>
            <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className={`w-25 text-center text-${Theme.font}`}>
            {t('AuthorScore')} {targetRecommendation[0].AuthorScore} <button className={`btn btn-${Theme.btn}`} onClick={onAuthorScoreSubmit}>{SendImg(20)}</button>
            </div>
            <div className="w-25">
            <RangeSlider
              variant={`${Theme.border}`}
              size='sm'
              value={value}
              min={1}
              max={10}
              onChange={changeEvent => setValue(changeEvent.target.value)}
             />
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
