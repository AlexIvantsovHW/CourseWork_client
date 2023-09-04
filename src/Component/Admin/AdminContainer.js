
import React  from 'react';
import { connect } from 'react-redux';
import Admin from './Admin';
import { compose } from 'redux';
import { getUserTC } from '../../Redux/UserReducer';



class AdminContainer extends React.Component{
    componentDidMount(){
        this.props.getUserTC();
      }
      componentDidUpdate(prevProps,prevState){
        if (this.props.Recommendation!== prevProps.Recommendation) {
          this.setState(this.props.Recommendation);
        }
      }
    render(){return(<Admin Users={this.props.Users}/>)}
}

const mapStateToProps=(state)=>{return{Users:state.Users,Login:state.login}}
export default compose (
  connect(mapStateToProps,{getUserTC}),
/*   withAuthNavigate */
  )(AdminContainer);