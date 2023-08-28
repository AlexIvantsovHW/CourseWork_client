import API from "../API/API"

const SET_LOGIN='SET_LOGIN'

let initialState = {
   auth:{name:null,password:null,id:null,auth:false},
}
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:return{...state,auth:action.data};
    default:return { ...state };
  }
};
export const loginAC=(data)=>{{return{type:SET_LOGIN,data}}}

export const getLoginTC=(data)=>{
  return async (dispatch)=>{
    let result=await API.getAuth(data);
    dispatch(loginAC(result.data))
    if(result.data.auth===true){alert('Successfully logging');}
    /* else{alert('Error')} */
  }
}
export default LoginReducer;