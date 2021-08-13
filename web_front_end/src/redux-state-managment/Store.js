import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import { 
    AccountReducer, 
    LanguageReducer,
    LogoutReducer 
} from './Reducers';


const middleware = [Thunk];

const reducer = combineReducers({
    AccountReducer,
    LanguageReducer,
    LogoutReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;