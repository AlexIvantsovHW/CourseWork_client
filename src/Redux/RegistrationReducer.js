import API from "../API/API"

const SET_REGISTR='SET_REGISTR'

let initialState = {
    password:null,
  name:null,
  email:null,
}
const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTR:return{...state,state:action.data};
    default:return { ...state };
  }
};
export const registerAC=(data)=>{{return{type:SET_REGISTR,data}}}

export const getRegistrationTC=(data)=>{
  return async (dispatch)=>{
    let Registration=await API.getRegistration(data);
    dispatch(registerAC(Registration))
  }
}
export default RegistrationReducer;