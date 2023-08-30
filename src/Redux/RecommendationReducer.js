import API from "../API/API"

const SET_USER_RECOMMENDATIONS='SET_USER_RECOMMENDATIONS';
const SET_STATUS='SET_STATUS';
const SET_DB='SET_DB';
const SET_SORT='SET_SORT';
const SET_UPDATE='SET_UPDATE'

let initialState = {
   recommendation:[{
    id_r:null,
    id_user:null,
    title:null,
    name:null,
    group:null,
    category:null,
    text:null,
    tag:null,
    score:null,
    date_upload:null
  },],
  DB:[{
    id_r:null,
    id_user:null,
    title:null,
    name:null,
    group:null,
    category:null,
    text:null,
    tag:null,
    score:null,
    date_upload:null
  },],
  setPublish:false,
  setUpdate:false,
}
const RecommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_RECOMMENDATIONS:return{...state,recommendation:action.data};
    case SET_DB:return{...state,DB:action.data};
    case SET_STATUS:return{...state,setPublish:action.status};
    case SET_UPDATE:return{...state,setUpdate:action.status};
    case SET_SORT:return{...state,DB:action.data}
    default:return { ...state };
  }
};
export const recommendationAC=(data)=>{{return{type:SET_USER_RECOMMENDATIONS,data}}}
export const dbAC=(data)=>{{return{type:SET_DB,data}}}
export const setPublishAC=(status)=>{{return{type:SET_STATUS,status}}}
export const setUpdateAC=(status)=>{{return{type:SET_UPDATE,status}}}
export const sortAC=(data)=>{{ return{type:SET_SORT,data}}}
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
  debugger;
  return async (dispatch)=>{
    let result=await API.getUpdate(data);
    dispatch(recommendationAC(result.data))
  }
}

export default RecommendationReducer;