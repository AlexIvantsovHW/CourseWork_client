import API from "../API/API"

const SET_USER_RECOMMENDATIONS='SET_USER_RECOMMENDATIONS'

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
  },]
}
const RecommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_RECOMMENDATIONS:return{...state,recommendation:action.data};
    default:return { ...state };
  }
};
export const recommendationAC=(data)=>{{return{type:SET_USER_RECOMMENDATIONS,data}}}

export const getRecomendTC=(data)=>{
  debugger;
  return async (dispatch)=>{
    let result=await API.getRecommendation(data);
    dispatch(recommendationAC(result.data))
    if(!result.data){alert('Successfully logging')}
  }
}
export const getAddRecomendTC=(data)=>{
  debugger;
  return async (dispatch)=>{
    let result=await API.getAddRecommend(data);
    dispatch(recommendationAC(result.data))
  }
}

export default RecommendationReducer;