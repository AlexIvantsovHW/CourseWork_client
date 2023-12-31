import React from "react";
import Comment from "./Comment/Comment";

const FullUserRecommend = (props) => {
  let status = props.status,
      statusComment=props.statusComment,
      recommendList = props.Recommendation.recommendation,
      targetId = props.id_r,
      targetRecommendation = recommendList.filter((rec) => rec.id_r === targetId);
  return (
    <div class="col">
      <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4">
          <div className="row mb-2">
            <h1 className="text-center">{targetRecommendation[0].title}</h1>
            <div className="col-3">Img</div>
            <div className="col-8 bg-light text-black overflow-auto" style={{ height: "200px" }}>
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
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullUserRecommend;
