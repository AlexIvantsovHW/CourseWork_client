import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import RegistrationReducer from './RegistrationReducer'
import LoginReducer from "./LoginReducer";


let reducers=combineReducers({
    form:formReducer,
    registration:RegistrationReducer,
    Login:LoginReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;