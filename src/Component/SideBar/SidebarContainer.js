import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { loginAC } from "../../Redux/LoginReducer";
import { themeAC } from './../../Redux/ThemeReducer';
import { getCommentsTC,getDataTC } from "../../Redux/RecommendationReducer";

class SidebarContainer extends React.Component{
  componentDidMount(){
    this.props.getDataTC();
  }
  
  render(){
    return (  
      <Sidebar 
        Login={this.props.Login.auth} 
        loginAC={this.props.loginAC}
        Theme={this.props.Theme} 
        themeAC={this.props.themeAC}
        Recommendation={this.props.Recommendation} 
        
  />);}};

const mapStateToProps=(state)=>{return{Login:state.Login,Theme:state.Theme,Recommendation:state.Recommendation,}}
export default connect(mapStateToProps,{loginAC,themeAC,getCommentsTC,getDataTC})(SidebarContainer);
  