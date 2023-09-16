import React from 'react'
import FullRecommend from './FullRecommend';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setUpdateAC,getUpdateTC,
        setCommentStatusAC,setViewAC,
        getCommentsTC,setCommentsTC } from '../../../Redux/RecommendationReducer';
import { withAuthNavigate } from '../../withAuthNavigate';
import { withRouter } from '../../CommonFunc';

class FullRecommContainer extends React.Component{
  componentDidMount(){
    this.props.getCommentsTC();
  }
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
      

    render(){
      return(
      <FullRecommend 
        Recommendation={this.props.Recommendation} 
        id_r={this.props.router.params.id} 
        status={this.props.Recommendation.setUpdate} 
        setUpdateAC={this.props.setUpdateAC}
        getUpdateTC={this.props.getUpdateTC}
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
    connect (mapStateToProps,{setUpdateAC,getUpdateTC,
      setCommentStatusAC,setViewAC,getCommentsTC,setCommentsTC}),
    withAuthNavigate
)((FullRecommContainer))