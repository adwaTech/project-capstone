import * as Constant from './Constants';
let initialState = {
    item: {
        isLogedIn: false,
        username: '',
        password: '',
        error: []
    },
    user: { },
    token: '',
    error: '',
    status: '',
    statusText: '',
    language: 'en',
    whichBtn: '',
    postauction: { },
    balance:'',

    // autions types
    allAuction: [],
    allexcept: [],
    idAuction: [],
    catagoryAuction: [],
    popularAuction: [],
    latestAuction: [],
    AuctioneerAuction: [],
    bid: { },
    biderror: '',
    bidstatus: '',
    bidstatusText: '',

    // search
    auctionsWithName: [],
    auctionsWithCategory: [],
    cities: [],
    usersWithFirstName: [],
    usersWithLastName: [],

    // getbid
    getbid_auctions: [],
    getbid_error: '',
    getbid_status: '',
    getbid_statusText: '',

    // get notification
    Notification: [],
    Notification_error: '',
    Notification_status: '',
    Notification_statusText: '',

    // deposite
    deposit: '',
    deposit_error: '',
    deposit_status: '',
    deposit_statusText: '',

    // withdraw
    withdraw: '',
    withdraw_error: '',
    withdraw_status: '',
    withdraw_statusText: '',
}

export const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.ACCOUNT:
            if (action.payload.status === 200) {
                var now = new Date();
                var time = now.getTime();
                var expireTime = time + 1000 * 36000;
                now.setTime(expireTime);
                document.cookie = `user=${action.payload.user}; token=${action.payload.data.token} ; expires=${now.toUTCString()}; path=/`;
                return {
                    ...state,
                    user: action.payload.data.user,
                    balance:action.payload.data.user.balance,
                    token: action.payload.data.token,
                    status: action.payload.status,
                    statusText: action.payload.statusText
                }
            } else {
                return {
                    ...state,
                    error: action.payload.data.error,
                    status: action.payload.status,
                    statusText: action.payload.statusText
                }
            }
        case Constant.LOGOUT:
            return {
                ...state,
                user: { },
                token: '',
                balance:''
            }
        case Constant.ACCOUNTCHECKOUT:
            return {
                ...state,
                error: '',
                status: '',
                statusText: ''
            }
        case Constant.UPDATEBALANCE:
            if(action.operator==="add"){
                return {
                    ...state,
                    balance: parseFloat(state.balance) + parseFloat(action.payload)
                }
            }
            if(action.operator==="sub"){
                return {
                    ...state,
                    balance: parseFloat(state.balance) - parseFloat(action.payload)
                }
            }
            break;
        default:
            return {
                ...state
            }
    }

}
export const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return {
                ...state
            }
    }

}
export const PostAuctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.POSTAUCTION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    postedauction: action.payload.data.user,
                    status: action.payload.status,
                    statusText: action.payload.statusText
                }
            } else {
                return {
                    ...state,
                    error: action.payload.data.error,
                    status: action.payload.status,
                    statusText: action.payload.statusText
                }
            }
        case Constant.CLEANUPPOSTAUCTION:
            return {
                ...state,
                error: '',
                status: '',
                statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}

export const AuctionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.ALL_AUCTION:
            return {
                ...state,
                allAuction: action.payload
            }
        case Constant.ALL_EXCEPT_AUCTIONER:
            return {
                ...state,
                allexcept: action.payload
            }
        case Constant.AUCTION_BY_ID:
            return {
                ...state,
                idAuction: action.payload
            }
        case Constant.CATAGORY_AUCTION:
            return {
                ...state,
                catagoryAuction: action.payload
            }
        case Constant.POPULAR_AUCTION:
            return {
                ...state,
                popularAuction: action.payload
            }
        case Constant.LATEST_AUCTION:
            return {
                ...state,
                latestAuction: action.payload
            }
        case Constant.GET_AUCTION_BY_AUCTIONER:
            return {
                ...state,
                AuctioneerAuction: action.payload
            }
        default:
            return {
                ...state
            }
    }

}
export const bidAuctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.BID_AUCTION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    bid: action.payload.data.bid,
                    bidstatus: action.payload.status,
                    bidstatusText: action.payload.statusText
                }
            }
            else if (action.payload.status === 401) {
                return {
                    ...state,
                    biderror: action.payload.data,
                    bidstatus: action.payload.status,
                    bidstatusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    biderror: action.payload.data.error,
                    bidstatus: action.payload.status,
                    bidstatusText: action.payload.statusText
                }
            }
        case Constant.CLEANUPBIDAUCTION:
            return {
                ...state,
                biderror: '',
                bidstatus: '',
                bidstatusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const SearchAuctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.SEARCH_AUCTION:
            return {
                ...state,
                auctionsWithName: action.payload.auctionsWithName,
                auctionsWithCategory: action.payload.auctionsWithCategory,
                cities: action.payload.cities,
                usersWithFirstName: action.payload.usersWithFirstName,
                usersWithLastName: action.payload.usersWithLastName
            }
        default:
            return {
                ...state
            }
    }

}
export const getBidReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.GET_BID_AUCTION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    getbid_auctions: action.payload.data,
                }
            }
            else {
                return {
                    ...state,
                    getbid_error: action.payload.data.error,
                    getbid_status: action.payload.status,
                    getbid_statusText: action.payload.statusText
                }
            }
        // case Constant.CLEANUPBIDAUCTION:
        //     return {
        //         ...state,
        //         biderror: '',
        //         bidstatus: '',
        //         bidstatusText: ''
        //     }
        default:
            return {
                ...state
            }
    }

}
export const getNotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.GET_NOTIFICATION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    Notification: action.payload.data,
                }
            }
            else {
                return {
                    ...state,
                    Notification_error: action.payload.data.error,
                    Notification_status: action.payload.status,
                    Notification_statusText: action.payload.statusText
                }
            }
        // case Constant.CLEANUPBIDAUCTION:
        //     return {
        //         ...state,
        //         biderror: '',
        //         bidstatus: '',
        //         bidstatusText: ''
        //     }
        default:
            return {
                ...state
            }
    }

}
export const DepositReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.DEPOSIT:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    deposit: action.payload.data.bid,
                    deposit_status: action.payload.status,
                    deposit_statusText: action.payload.statusText
                }
            }
            else if (action.payload.status === 401) {
                return {
                    ...state,
                    deposit_error: action.payload.data,
                    deposit_status: action.payload.status,
                    deposit_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    deposit_error: action.payload.data,
                    deposit_status: action.payload.status,
                    deposit_statusText: action.payload.statusText
                }
            }
        case Constant.DEPOSITCLEANUP:
            return {
                ...state,
                deposit_error: '',
                deposit_status: '',
                deposit_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const WithDrawReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.WITHDRAW:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    withdraw: action.payload.data.bid,
                    withdraw_status: action.payload.status,
                    withdraw_statusText: action.payload.statusText
                }
            }
            else if (action.payload.status === 401) {
                return {
                    ...state,
                    withdraw_error: action.payload.data,
                    withdraw_status: action.payload.status,
                    withdraw_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    withdraw_error: action.payload.data,
                    withdraw_status: action.payload.status,
                    withdraw_statusText: action.payload.statusText
                }
            }
        case Constant.WITHDRAWCLEANUP:
            return {
                ...state,
                withdraw_error: '',
                withdraw_status: '',
                withdraw_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}