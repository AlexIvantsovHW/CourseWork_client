import API from "../API/API"
const SET_TAG='SET_TAG'

let initialState = {users:[{name:null,id:null}]}
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG:return{...state,tag:action.tag};
    default:return { ...state };
  }
};
export const tagAC=(tag)=>{{return{type:SET_TAG,tag}}}
export const getTagTC=()=>{
  return async (dispatch)=>{
    let result=await API.getTags();
    dispatch(tagAC(result.data))
  }
}
export default UserReducer;