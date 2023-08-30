import React from 'react'
import FullRecommend from './FullRecommend';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import { setUpdateAC,getUpdateTC } from '../../../Redux/RecommendationReducer';

class FullRecommContainer extends React.Component{
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }

    render(){debugger;return(<FullRecommend Recommendation={this.props.Recommendation.recommendation} 
        id_r={this.props.router.params.id} status={this.props.Recommendation.setUpdate} 
        setUpdateAC={this.props.setUpdateAC}
        getUpdateTC={this.props.getUpdateTC}
        />
        
        )}
}
debugger;

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

const mapStateToProps=(state)=>{
    return{Recommendation:state.Recommendation}}
export default compose(
    withRouter,
    connect (mapStateToProps,{setUpdateAC,getUpdateTC})
)((FullRecommContainer))