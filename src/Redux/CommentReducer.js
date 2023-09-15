import API from "../API/API"

const SET_USERS='SET_USERS'

let initialState = {
  users:[{name:null,id:null}]
}
const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:debugger;return{...state,users:action.users};
    default:return { ...state };
  }
};
export const userAC=(users)=>{{debugger;return{type:SET_USERS,users}}}

export const getUserTC=()=>{
  return async (dispatch)=>{
    debugger;
    let result=await API.getUsers();
    dispatch(userAC(result.data))
  }
}
export default CommentReducer;