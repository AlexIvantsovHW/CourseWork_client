import API from "../API/API"

const SET_USER_RECOMMENDATIONS='SET_USER_RECOMMENDATIONS';
const SET_STATUS='SET_STATUS';
const SET_DB='SET_DB';
const SET_SORT='SET_SORT';
const SET_UPDATE='SET_UPDATE'
const SET_SCORE='SET_SCORE'
const SET_USER_SCORE='SET_USER_SCORE'
const SET_TOTAL_SCORE='SET_TOTAL_SCORE'
const SET_RATE='SET_RATE'
const SET_COMMENT_STATUS='SET_COMMENT_STATUS'
const SET_VIEW_STATUS='SET_VIEW_STATUS'
const SET_COMMENT='SET_COMMENT'

let initialState = {
   recommendation:[{
    id_r:null,
    id_user:null,
    image:null,
    title:null,
    name:null,
    group:null,
    category:null,
    text:null,
    tag:null,
    score:null,
    date_upload:null,
    Amount:null
  },],
  DB:[{
    id_r:null,
    id_user:null,
    image:null,
    title:null,
    name:null,
    group:null,
    category:null,
    id_comment:null,
    text:null,
    tag:null,
    date_upload:null,
    Amount:null,
    rate:null
  },],
  setPublish:false,
  setUpdate:false,
  score:[{id_r:null,score:null}],
  userScore:[{id_r:null,score:null}],
  totalScore:[{id_r:null,Amount:null}],
  rate:[{id_r:null,id_user:null,rate:null}],
  setCommentStatus:false,
  setView:false,
  comments:[{id_r:null,id_user:null,comment:null,date_upload:null,name:null}]
}
const RecommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_RECOMMENDATIONS:return{...state,recommendation:action.data};
    case SET_DB:return{...state,DB:action.data};
    case SET_STATUS:return{...state,setPublish:action.status};
    case SET_UPDATE:return{...state,setUpdate:action.status};
    case SET_VIEW_STATUS:return{...state,setView:action.status};
    case SET_COMMENT_STATUS:return{...state,setCommentStatus:action.status};
    case SET_COMMENT:debugger;return{...state,comments:action.comment};
    case SET_SORT:return{...state,DB:action.data}
    case SET_SCORE: return{...state,score:action.score};
    case SET_TOTAL_SCORE:return {...state,totalScore:action.totalScore};
    case SET_USER_SCORE: return{...state,userScore:action.data};
    case SET_RATE:return{...state,rate:action.rate}
    default:return { ...state };
  }
};
//ACTION CREATORS
export const recommendationAC=(data)=>{{return{type:SET_USER_RECOMMENDATIONS,data}}}
export const dbAC=(data)=>{{return{type:SET_DB,data}}}
export const setPublishAC=(status)=>{{return{type:SET_STATUS,status}}}
export const setUpdateAC=(status)=>{{return{type:SET_UPDATE,status}}}
export const setViewAC=(status)=>{{return{type:SET_VIEW_STATUS,status}}}
export const sortAC=(data)=>{{ return{type:SET_SORT,data}}}
export const scoreUserAC=(data)=>{{ return{type:SET_USER_SCORE,data}}}
export const scoreTotalAC=(totalScore)=>{{return{type:SET_TOTAL_SCORE,totalScore}}}
export const scoreAC=(score)=>{{return{type:SET_SCORE,score}}}
export const RateAC=(rate)=>{{return{type:SET_RATE,rate}}}
export const setCommentStatusAC=(status)=>{{return{type:SET_COMMENT_STATUS,status}}}
export const commentsAC=(comment)=>{{debugger;return{type:SET_COMMENT,comment}}}
//THUNC CREATOR
export const getRecomendTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getRecommendation(data);
    dispatch(recommendationAC(result.data))
    if(!result.data){alert('Successfully logging')}
  }
}
export const getAddRecomendTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getAddRecommend(data);
    dispatch(recommendationAC(result.data))
  }
}
export const getDbTC=()=>{
  return async (dispatch)=>{
    let result=await API.getDB();
    dispatch(dbAC(result.data))
  }
}
export const getSortTC=(sort)=>{
  return async (dispatch)=>{
    let result=await API.getSort(sort);
    dispatch(dbAC(result.data))
  }
}
export const getUpdateTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getUpdate(data);
    dispatch(recommendationAC(result.data))
  }
}
export const getScoreTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getScore(data);
    dispatch(scoreTotalAC(result.data))
  }
}
export const getLikeTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getLike(data);
    dispatch(scoreAC(result.data))
  }
}
export const getLikeListTC=()=>{
  return async(dispatch)=>{
    let result=await API.getLikeList();
    dispatch(scoreAC(result.data))
  }
}
export const getUserLikesTC=()=>{
  return async(dispatch)=>{
    let result=await API.getUserLikes();
     dispatch(scoreUserAC(result.data))
  }
}
export const setRateTC=(data)=>{
    return async(dispatch)=>{
    let result=await API.postRate(data);
    dispatch(RateAC(result.data))}
}
export const getRateDataTC=()=>{
  return async(dispatch)=>{
  let result=await API.getRate();
  dispatch(RateAC(result.data))}
}
export const getCommentsTC=()=>{
  return async(dispatch)=>{
    let result=await API.getComments();
    dispatch(commentsAC(result.data))}
}
export const setCommentsTC=(data)=>{
  return async(dispatch)=>{
    let result=await API.setComments(data);
    dispatch(commentsAC(result.data))}
}
export default RecommendationReducer;

