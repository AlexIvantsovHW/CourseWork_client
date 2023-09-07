import React from "react";
import TagList from "./TagList";
import { connect } from 'react-redux';
import { themeAC } from "../../../Redux/ThemeReducer";
import { filterAC, tagsAC } from './../../../Redux/RecommendationReducer';


class TagContainer extends React.Component{
    componentDidMount(){

    }
    componentDidUpdate(){
        
    }
    render(){
        return(
            <TagList
                Theme={this.props.Theme.theme} 
                themeAC={this.props.themeAC}
                filterAC={this.props.filterAC}
                tagsAC={this.props.tagsAC}
            />
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        Theme:state.Theme
    }
}
export default connect(mapStateToProps,{themeAC,filterAC,tagsAC})(TagContainer);
