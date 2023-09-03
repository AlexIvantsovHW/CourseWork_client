import React from "react"
import { Navigate } from "react-router-dom"
export const withAuthNavigate =(Component)=>{
    class NavigateComponent extends React.Component{       
        
        render(){
            if(this.props.Login.auth.auth===false) return <Navigate to='/login'/>;
            return <Component {...this.props}/>}
    }
    return NavigateComponent;
}
export function  blockRender(auth,Component){
    
if(auth===false) return null;
return Component;
}


            
    

