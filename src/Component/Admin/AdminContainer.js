
import React  from 'react';
import { connect } from 'react-redux';
import Admin from './Admin';
import { compose } from 'redux';
import { getUserTC,deleteUserTC } from '../../Redux/UserReducer';



class AdminContainer extends React.Component{
    componentDidMount(){
        this.props.getUserTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(
    <Admin 
      Users={this.props.Users}
      deleteUserTC={this.props.deleteUserTC}
      Theme={this.props.Theme} 
      />)}
}

const mapStateToProps=(state)=>{
  return{
    Users:state.Users,
    Login:state.login,
    Theme:state.Theme,
  }}
export default compose (
  connect(mapStateToProps,{getUserTC,deleteUserTC}),
  )(AdminContainer);