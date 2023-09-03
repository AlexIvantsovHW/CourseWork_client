import React from 'react'
import Expand from './Expand';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import { setUpdateAC,getUpdateTC, getDbTC, getScoreTC } from '../../../Redux/RecommendationReducer';
import { withAuthNavigate } from '../../withAuthNavigate';

class ExpandContainer extends React.Component{

    componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }

    render(){return(<Expand DB={this.props.DB}
        id_r={this.props.router.params.id}  
        setUpdateAC={this.props.setUpdateAC}
        getUpdateTC={this.props.getUpdateTC}
        Login={this.props.Login}
        />
        
        )}
}


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

const mapStateToProps=(state)=>{return{DB:state.Recommendation.DB,Login:state.Login}}
export default compose(
    withRouter,
    connect (mapStateToProps,{setUpdateAC,getUpdateTC,getDbTC,getScoreTC}),
)((ExpandContainer))