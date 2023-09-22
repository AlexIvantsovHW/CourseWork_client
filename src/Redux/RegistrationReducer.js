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
    let result=await API.getRegistration(data);
    {if(result.data===200){
      alert('Registration complete');
    }else if(result.data==='dublicate')
    {alert('User is always registered! ')}
  }; 
  }
}
export default RegistrationReducer;