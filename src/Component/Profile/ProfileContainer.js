import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getLoginTC } from "../../Redux/LoginReducer";
import { getRecomendTC } from "../../Redux/RecommendationReducer";
import { withAuthNavigate } from "../withAuthNavigate";
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component{
  componentDidMount(){
  
    const fData=new FormData();
    let id=this.props.router.params.id; 
    fData.append("id",id); 
    this.props.getRecomendTC(fData);
  }
  componentDidUpdate(prevProps,prevState){
    if (this.props.Recommendation!== prevProps.Recommendation) {
      this.setState(this.props.Recommendation);
    }
  }
  
  render(){return ( 
    <Profile getLoginTC={this.props.getLoginTC} getRecomendTC={this.props.getRecomendTC}
          Recommendation={this.props.Recommendation} 
  />);}
};

export var withRouter=function (Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
;


const mapStateToProps=(state)=>{return{Login:state.Login,Recommendation:state.Recommendation,}}
export default compose (
  withRouter,
  connect(mapStateToProps,{getLoginTC,getRecomendTC}),
  withAuthNavigate
  )(ProfileContainer);
  