import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { loginAC } from "../../Redux/LoginReducer";
import { themeAC } from './../../Redux/ThemeReducer';

class SidebarContainer extends React.Component{
  
  render(){
    return (  
      <Sidebar 
        Login={this.props.Login.auth} loginAC={this.props.loginAC}
        Theme={this.props.Theme} themeAC={this.props.themeAC}
  />);}};

const mapStateToProps=(state)=>{return{Login:state.Login,Theme:state.Theme}}
export default connect(mapStateToProps,{loginAC,themeAC})(SidebarContainer);
  