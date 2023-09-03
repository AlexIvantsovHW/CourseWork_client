import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { loginAC } from "../../Redux/LoginReducer";

class SidebarContainer extends React.Component{
  
  render(){return (  <Sidebar Login={this.props.Login.auth} loginAC={this.props.loginAC}/>);}};

const mapStateToProps=(state)=>{return{Login:state.Login}}
export default connect(mapStateToProps,{loginAC})(SidebarContainer);
  