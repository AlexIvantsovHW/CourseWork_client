import API from "../API/API"

const SET_SCORE='SET_SCORE'

let initialState = {
   score:[{id_r:null,score:null}],
}
const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:return{...state,auth:action.data};
    default:return { ...state };
  }
};
export const scoreAC=(score)=>{{return{type:SET_SCORE,score}}}

export const getScoreTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getScore(data);
    dispatch(scoreAC(result.data))
    if(result.data.auth===true){alert('Successfully logging');}
    /* else{alert('Error')} */
  }
}
export default ScoreReducer;