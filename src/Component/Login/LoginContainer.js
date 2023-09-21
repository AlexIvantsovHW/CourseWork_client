import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { connect } from "react-redux";
import { getLoginTC } from "../../Redux/LoginReducer";
import { themeAC } from './../../Redux/ThemeReducer';
import { getDbTC } from "../../Redux/RecommendationReducer";

class LoginContainer extends React.Component{
  componentDidMount(){this.props.getDbTC()}
  render(){return ( <Login 
    getLoginTC={this.props.getLoginTC}
    Theme={this.props.Theme} themeAC={this.props.themeAC}
    />);}
};

const mapStateToProps=(state)=>{return{Login:state.Login,Theme:state.Theme}}
export default connect(mapStateToProps,{getLoginTC,themeAC,getDbTC})(LoginContainer);