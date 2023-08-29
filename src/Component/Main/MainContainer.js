
import React  from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDbTC,getSortTC } from '../../Redux/RecommendationReducer';
import Main from './Main';




class MainContainer extends React.Component{
    componentDidMount(){
      this.props.getDbTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(<Main DB={this.props.DB} getSortTC={this.props.getSortTC}/>)}
}

const mapStateToProps=(state)=>{return{DB:state.Recommendation.DB}}
export default compose (
  connect(mapStateToProps,{getDbTC,getSortTC}),
/*   withAuthNavigate */
  )(MainContainer);
  