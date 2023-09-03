
import React  from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDbTC,getScoreTC,getSortTC,getLikeTC } from '../../Redux/RecommendationReducer';
import Main from './Main';
import { withAuthNavigate } from '../withAuthNavigate';

class MainContainer extends React.Component{
    componentDidMount(){
      this.props.getDbTC();
      this.props.getScoreTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(
    <Main DB={this.props.DB} getSortTC={this.props.getSortTC} 
    score={this.props.score} getScoreTC={this.props.getScoreTC}
    getLikeTC={this.props.getLikeTC} Login={this.props.Login}
    id_user={this.props.Login.auth.id} totalScore={this.props.Recommendation.totalScore}
    />)}
}

const mapStateToProps=(state)=>{return{DB:state.Recommendation.DB,score:state.Recommendation.score,Login:state.Login,Recommendation:state.Recommendation}}
export default compose (
  connect(mapStateToProps,{getDbTC,getSortTC,getScoreTC,getLikeTC}),
/*   withAuthNavigate */
  )(MainContainer);
  