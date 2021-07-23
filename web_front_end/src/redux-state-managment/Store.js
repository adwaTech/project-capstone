import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import {} from './Reducers';
 
const middleware=[Thunk];

const reducer=combineReducers({
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;