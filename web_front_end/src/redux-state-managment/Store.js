import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import {LoginReducer,RegisterReducer} from './Reducers';
 
const middleware=[Thunk];

const reducer=combineReducers({
    LoginReducer,
    RegisterReducer
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;