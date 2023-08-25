import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { connect } from "react-redux";
import { getLoginTC } from "../../Redux/LoginReducer";

class LoginContainer extends React.Component{
  
  render(){return ( <Login getLoginTC={this.props.getLoginTC}/>);}
};

const mapStateToProps=(state)=>{return{Login:state.Login,}}
export default connect(mapStateToProps,{getLoginTC})(LoginContainer);