
import React  from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { 
  getDbTC,getScoreTC
  ,getSortTC,getLikeTC,
  getLikeListTC,setRateTC,
  getRateDataTC, tagsAC,
   filterAC,setAuthorScoreTC 
  } from '../../Redux/RecommendationReducer';
import Main from './Main';
import { themeAC } from './../../Redux/ThemeReducer';

class MainContainer extends React.Component{
    componentDidMount(){
      this.props.getDbTC();
      this.props.getScoreTC();
      this.props.getLikeListTC();
      this.props.getRateDataTC();
      }
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(
    <Main 
        DB={this.props.DB} getSortTC={this.props.getSortTC} 
        score={this.props.score} getScoreTC={this.props.getScoreTC}
        getLikeTC={this.props.getLikeTC} Login={this.props.Login}
        id_user={this.props.Login.auth.id} totalScore={this.props.Recommendation.totalScore}
        userScore={this.props.Recommendation.userScore} setRateTC={this.props.setRateTC}
        Recommendation={this.props.Recommendation}
        Theme={this.props.Theme} themeAC={this.props.themeAC}
        tagsAC={this.props.tagsAC}
        filterAC={this.props.filterAC}
        setAuthorScoreTC={this.props.setAuthorScoreTC}
    />)}
} 
const mapStateToProps=(state)=>{return{
  DB:state.Recommendation.DB,
  score:state.Recommendation.score,
  Login:state.Login,
  Recommendation:state.Recommendation,
  Theme:state.Theme,
  
}}
export default compose (
  connect(mapStateToProps,{
    getDbTC,getSortTC,
    getScoreTC,getLikeTC,
    getLikeListTC,setRateTC,
    getRateDataTC,themeAC,
    tagsAC,filterAC,
    setAuthorScoreTC}),
  )(MainContainer);
  