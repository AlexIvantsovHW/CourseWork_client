import React from 'react'
import FullUserRecommend from './FullUserRecommend';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setCommentStatusAC,setViewAC,
        getCommentsTC,setCommentsTC,getRecomendTC } from '../../../Redux/RecommendationReducer';
import { withAuthNavigate } from '../../withAuthNavigate';
import { withRouter } from '../../CommonFunc';

class FullUserRecommContainer extends React.Component{
  componentDidMount(){
    debugger;
    this.props.getCommentsTC();

  }
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){
      return(
      <FullUserRecommend 
        Recommendation={this.props.Recommendation} 
        id_r={this.props.router.params.id} 
        status={this.props.Recommendation.setUpdate} 
        Login={this.props.Login}
        setCommentStatusAC={this.props.setCommentStatusAC}
        statusComment={this.props.Recommendation.setCommentStatus} 
        statusView={this.props.Recommendation.setView}
        setViewAC={this.props.setViewAC}
        setCommentsTC={this.props.setCommentsTC}
        />
        )}
}

const mapStateToProps=(state)=>{return{Recommendation:state.Recommendation,Login:state.Login}}
export default compose(
    withRouter,
    connect (mapStateToProps,{setCommentStatusAC,setViewAC,getCommentsTC,setCommentsTC,getRecomendTC}),
    withAuthNavigate
)((FullUserRecommContainer))