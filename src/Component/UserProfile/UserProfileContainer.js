import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getLoginTC } from "../../Redux/LoginReducer";
import { getAddRecomendTC, getRecomendTC, getUserLikesTC,getLikeTC, getCommentsTC, getRateDataTC, sortProfileTC} from "../../Redux/RecommendationReducer";
import { withAuthNavigate } from "../withAuthNavigate";
import { compose } from "redux";
import { setPublishAC,filterAC, tagsAC,deleteRecommendationTC} from "../../Redux/RecommendationReducer";
import { withRouter } from "../CommonFunc";
import { getUserTC } from "../../Redux/UserReducer";
import { themeAC } from '../../Redux/ThemeReducer';
import UserProfile from './UserProfile';

class UserProfileContainer extends React.Component{
  componentDidMount(){  
    let id=this.props.router.params.id;
    const fData=new FormData(); 
    fData.append("id",id);
    this.props.getUserTC(); 
    this.props.getRateDataTC();
    this.props.getRecomendTC(fData);
    this.props.getCommentsTC();   
    this.props.getUserLikesTC();
  }
  componentDidUpdate(prevProps,prevState){
    if (this.props.Recommendation!== prevProps.Recommendation) {
      this.setState(this.props.Recommendation);
    }
  }
  render(){return ( 
    <UserProfile 
          getLoginTC={this.props.getLoginTC} 
          getRecomendTC={this.props.getRecomendTC}
          Recommendation={this.props.Recommendation} 
          id_user={this.props.router.params.id}
          getAddRecomendTC={this.props.getAddRecomendTC} 
          setPublishAC={this.props.setPublishAC}
          Login={this.props.Login.auth} 
          DB={this.props.DB}  
          Users={this.props.Users.users}
          Theme={this.props.Theme} 
          themeAC={this.props.themeAC}
          filterAC={this.props.filterAC}
          tagsAC={this.props.tagsAC}
          deleteRecommendationTC={this.props.deleteRecommendationTC}
          sortProfileTC={this.props.sortProfileTC}
          />);}
};
const mapStateToProps=(state)=>{
  return{
    Login:state.Login,
    Recommendation:state.Recommendation,
    Users:state.Users,
    Theme:state.Theme,
  }}
export default compose (
  withRouter,
  connect(mapStateToProps,{
    getLoginTC,getRecomendTC,getAddRecomendTC,
    setPublishAC,getUserLikesTC,getLikeTC,
    getUserTC,themeAC,filterAC,tagsAC,
    getCommentsTC,getRateDataTC,
    deleteRecommendationTC,sortProfileTC
  }),
  withAuthNavigate
  )(UserProfileContainer);
  