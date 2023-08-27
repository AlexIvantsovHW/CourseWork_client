
import React  from 'react';
import { connect } from 'react-redux';
import User from './User';
import { compose } from 'redux';
import { getUserTC } from '../../Redux/UserReducer';



class UserContainer extends React.Component{
    componentDidMount(){
        this.props.getUserTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(<User Users={this.props.Users}/>)}
}

const mapStateToProps=(state)=>{return{Users:state.Users}}
export default compose (
  connect(mapStateToProps,{getUserTC}),
/*   withAuthNavigate */
  )(UserContainer);