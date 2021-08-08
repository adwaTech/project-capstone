import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
<<<<<<< HEAD
import {Login,Register} from './Reducers';
=======
import {} from './Reducers';
>>>>>>> main
 
const middleware=[Thunk];

const reducer=combineReducers({
<<<<<<< HEAD
    Login,
    Register
=======
>>>>>>> main
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;