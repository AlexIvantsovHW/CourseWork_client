import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import RegistrationReducer from './RegistrationReducer'
import LoginReducer from "./LoginReducer";
import RecommendationReducer from "./RecommendationReducer";
import UserReducer from "./UserReducer";
import ThemeReducer from "./ThemeReducer";
import CommentReducer from "./CommentReducer";

let reducers=combineReducers({
    form:formReducer,
    registration:RegistrationReducer,
    Login:LoginReducer,
    Recommendation:RecommendationReducer,
    Users:UserReducer,
    Theme:ThemeReducer,
    Comment:CommentReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;