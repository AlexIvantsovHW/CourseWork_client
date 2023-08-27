import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";

class SidebarContainer extends React.Component{
  
  render(){return (  <Sidebar Login={this.props.Login.auth} />);}};

const mapStateToProps=(state)=>{return{Login:state.Login}}
export default connect(mapStateToProps,{})(SidebarContainer);
  