import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Registration";
import { connect } from "react-redux";
import { getRegistrationTC } from "../../Redux/RegistrationReducer";
import { themeAC } from './../../Redux/ThemeReducer';
import { getDbTC } from "../../Redux/RecommendationReducer";

class RegistrationContainer extends React.Component{
  componentDidMount(){this.props.getDbTC()}
  render(){return ( 
  <Registration 
    getRegistrationTC={this.props.getRegistrationTC}
    Theme={this.props.Theme} 
    themeAC={this.props.themeAC}
    />);}
};

const mapStateToProps=(state)=>{return{registration:state.registration,Theme:state.Theme}}
export default connect(mapStateToProps,{getRegistrationTC,themeAC,getDbTC})(RegistrationContainer);