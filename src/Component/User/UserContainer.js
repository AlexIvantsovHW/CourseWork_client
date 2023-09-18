
import React  from 'react';
import { connect } from 'react-redux';
import User from './User';
import { compose } from 'redux';
import { getUserTC } from '../../Redux/UserReducer';
import { themeAC } from './../../Redux/ThemeReducer';
import { getDbTC, getScoreTC, getLikeListTC, getCommentsTC } from './../../Redux/RecommendationReducer';



class UserContainer extends React.Component{
    componentDidMount(){
        this.props.getUserTC();
        this.props.getCommentsTC();
        this.props.getDbTC();
        this.props.getScoreTC();
        this.props.getLikeListTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(<User 
      Users={this.props.Users} Theme={this.props.Theme} themeAC={this.props.themeAC}/>)}
}

const mapStateToProps=(state)=>{
  return{
    Users:state.Users,
    Login:state.login,
    Theme:state.Theme}
  }
export default compose (
  connect(mapStateToProps,{getUserTC,themeAC,getLikeListTC,getScoreTC,getDbTC,getCommentsTC}),
/*   withAuthNavigate */
  )(UserContainer);