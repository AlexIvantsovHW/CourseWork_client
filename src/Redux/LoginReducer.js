import API from "../API/API"

const SET_LOGIN='SET_LOGIN'

let initialState = {auth:{name:null,password:null,id:null,auth:false}}
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
  }
}
export const getGitLoginTC=(data)=>{
  return async (dispatch)=>{
    const githubData=data;
    console.log(githubData)
    const githubUserId=data.id;
    const githubUserName=data.displayName
    const githubUserProfileURL=data.profileUrl;
    const fData=new FormData();
    const fData2=new FormData();
    let req2;
    fData.append('email',githubUserProfileURL);
    fData.append('name',githubUserName);
    fData.append('pass',githubUserId);

    fData2.append('name',githubUserName)
    fData2.append('pass',githubUserId)
    let result=await API.checkGitUser(fData);
        if(result.data[0].user===0){
          let req1=await API.getRegistration(fData);
          if(req1.data===200){
            console.log(req1)
            req2=await API.getAuth(fData2)
          }else{alert('Error in login of github user')}
          
        }else{
          console.log(fData2)
            req2=await API.getAuth(fData2)
        }
        dispatch(loginAC(req2.data))
  }
}

export default LoginReducer;