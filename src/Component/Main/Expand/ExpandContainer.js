import React from 'react'
import Expand from './Expand';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { 
  setUpdateAC,getUpdateTC,
  getDbTC, getScoreTC,
  getCommentsTC, setViewAC,
  setCommentsTC,setCommentStatusAC } from '../../../Redux/RecommendationReducer';
import { withRouter } from '../../CommonFunc';

class ExpandContainer extends React.Component{
  componentDidMount(){
    this.props.getCommentsTC();
  }
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }

    render(){return(<Expand 
        DB={this.props.DB} 
        id_r={this.props.router.params.id}  
        setUpdateAC={this.props.setUpdateAC}
        getUpdateTC={this.props.getUpdateTC}
        Login={this.props.Login}
        setViewAC={this.props.setViewAC}
        statusComment={this.props.DB.setCommentStatus} 
        setCommentsTC={this.props.setCommentsTC}
        setCommentStatusAC={this.props.setCommentStatusAC}
        score={this.props.score}
        />
        
        )}
}


const mapStateToProps=(state)=>{return{
  DB:state.Recommendation,
  Login:state.Login,
  comment:state.Recommendation.comments,
  score:state.Recommendation.score
}}
export default compose(
    withRouter,
    connect (mapStateToProps,
      { setUpdateAC,getUpdateTC,
        getDbTC,getScoreTC,
        getCommentsTC,setViewAC,
        setCommentsTC,setCommentStatusAC
      }),
)((ExpandContainer))