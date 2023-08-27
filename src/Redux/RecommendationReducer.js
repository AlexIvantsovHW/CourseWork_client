import API from "../API/API"

const SET_USER_RECOMMENDATIONS='SET_USER_RECOMMENDATIONS'

let initialState = {
   recommendation:[{
    id_r:null,
    id_user:null,
    recommendation:null,
    group:null,
    name:null,
    category:null,
    score:null,
    tag:null,
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
   /*  else{alert('Error')} */
  }
}
export default RecommendationReducer;