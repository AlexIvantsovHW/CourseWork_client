import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Registration";
import { connect } from "react-redux";
import { getRegistrationTC } from "../../Redux/RegistrationReducer";

class RegistrationContainer extends React.Component{
  
  render(){return ( <Registration getRegistrationTC={this.props.getRegistrationTC}/>);}
};

const mapStateToProps=(state)=>{return{registration:state.registration,}}
export default connect(mapStateToProps,{getRegistrationTC})(RegistrationContainer);