import React from 'react'
import FullRecommend from './FullRecommend';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setUpdateAC,getUpdateTC,setCommentStatusAC,setViewAC } from '../../../Redux/RecommendationReducer';
import { withAuthNavigate } from '../../withAuthNavigate';
import { withRouter } from '../../CommonFunc';

class FullRecommContainer extends React.Component{
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }

    render(){
      return(
      <FullRecommend 
        Recommendation={this.props.Recommendation.recommendation} 
        id_r={this.props.router.params.id} 
        status={this.props.Recommendation.setUpdate} 
        setUpdateAC={this.props.setUpdateAC}
        getUpdateTC={this.props.getUpdateTC}
        Login={this.props.Login}
        setCommentStatusAC={this.props.setCommentStatusAC}
        statusComment={this.props.Recommendation.setCommentStatus} 
        statusView={this.props.Recommendation.setView}
        setViewAC={this.props.setViewAC}
        />
        )}
}

const mapStateToProps=(state)=>{return{Recommendation:state.Recommendation,Login:state.Login}}
export default compose(
    withRouter,
    connect (mapStateToProps,{setUpdateAC,getUpdateTC,setCommentStatusAC,setViewAC}),
    withAuthNavigate
)((FullRecommContainer))