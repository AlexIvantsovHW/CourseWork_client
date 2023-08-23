import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import RegistrationReducer from './RegistrationReducer'


let reducers=combineReducers({
    form:formReducer,
    registration:RegistrationReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;