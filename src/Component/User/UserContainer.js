import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import { connect } from "react-redux";
import { getLoginTC } from "../../Redux/LoginReducer";

class UserContainer extends React.Component{
  
  render(){return ( <User getLoginTC={this.props.getLoginTC}/>);}
};

const mapStateToProps=(state)=>{return{Login:state.Login,}}
export default connect(mapStateToProps,{getLoginTC})(UserContainer);