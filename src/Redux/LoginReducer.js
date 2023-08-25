import API from "../API/API"

const SET_LOGIN='SET_LOGIN'

let initialState = {
   auth:false,
}
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:debugger;return{...state,auth:action.data};
    default:return { ...state };
  }
};
export const loginAC=(data)=>{{return{type:SET_LOGIN,data}}}

export const getLoginTC=(data)=>{
  debugger;
  return async (dispatch)=>{
    let result=await API.getAuth(data);
    debugger;
    dispatch(loginAC(result.data))
    if(result.data===true){alert('Successfully logging')}
    else{alert(result.data)}
  }
}
export default LoginReducer;