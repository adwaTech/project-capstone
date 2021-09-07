import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import { 
    AccountReducer, 
    LanguageReducer,
    PostAuctionReducer,
    AuctionsReducer,
    bidAuctionReducer,
    SearchAuctionReducer,
    getBidReducer,
    getNotificationReducer,
    DepositReducer,
    WithDrawReducer,
    ApproveAuctionReducer,
    getUsersReducer,
    SetWinnerReducer
} from './Reducers';


const middleware = [Thunk];

const reducer = combineReducers({
    AccountReducer,
    LanguageReducer,
    PostAuctionReducer,
    AuctionsReducer,
    bidAuctionReducer,
    SearchAuctionReducer,
    getBidReducer,
    getNotificationReducer,
    DepositReducer,
    WithDrawReducer,
    ApproveAuctionReducer,
    getUsersReducer,
    SetWinnerReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;