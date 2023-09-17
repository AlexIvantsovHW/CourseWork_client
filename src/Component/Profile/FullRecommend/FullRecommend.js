import React from "react";
import { update } from "./FormikFunc";
import Comment from "./Comment/Comment";
import { useTranslation } from 'react-i18next';
import '../../../i18n'

const FullRecommend = (props) => {
  debugger;
  const { t, i18n } = useTranslation();
  let status = props.status,
      Theme=props.Theme.theme,
      statusComment=props.statusComment,
      recommendList = props.Recommendation.recommendation,
      targetId = props.id_r,
      targetRecommendation = recommendList.filter((rec) => rec.id_r === targetId);
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
