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
    balance: '',

    // autions types
    allAuction: [],
    overallauction: [],
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

    // admin prove
    approve: '',
    approve_error: '',
    approve_status: '',
    approve_statusText: '',

    // users for admin
    admin_users: [],
    user_error: '',
    user_status: '',
    user_statusText: '',

    //winner
    winner: '',
    winner_error: '',
    winner_status: '',
    winner_statusText: '',

    // delete user
    delete: '',
    delete_error: '',
    delete_status: '',
    delete_statusText: '',

    // delete auction
    delete_auction: '',
    delete_auction_error: '',
    delete_auction_status: '',
    delete_auction_statusText: '',

    // feedback;
    feedbacks: '',
    feedbacks_error: '',
    feedbacks_status: '',
    feedbacks_statusText: '',


}


// user
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
        case Constant.USERPROFILE:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    user: action.payload.data,
                }
            } else {
                return {
                    ...state,
                    error: action.payload.data.error,
                    status: action.payload.status,
                    statusText: action.payload.statusText
                }
            }
        case Constant.UPDATEPROFILE:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    user: action.payload.data,
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
                balance: ''
            }
        case Constant.ACCOUNTCHECKOUT:
            return {
                ...state,
                error: '',
                status: '',
                statusText: ''
            }
        case Constant.UPDATEBALANCE:
            if (action.operator === "add") {
                return {
                    ...state,
                    balance: parseFloat(state.balance) + parseFloat(action.payload)
                }
            }
            if (action.operator === "sub") {
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
        case Constant.GETALLAUCTION:
            return {
                ...state,
                overallauction: action.payload
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
        case Constant.SHOWNOTIFICATION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    // Notification: action.payload.data,
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
                    withdraw_error: action.payload.data.error,
                    withdraw_status: action.payload.status,
                    withdraw_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    withdraw_error: action.payload.data.error,
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

// admin
export const ApproveAuctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.APPROVEAUCTION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    approve: action.payload.data.bid,
                    approve_status: action.payload.status,
                    approve_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    approve_error: action.payload.data.error,
                    approve_status: action.payload.status,
                    approve_statusText: action.payload.statusText
                }
            }
        case Constant.APPROVEAUCTION:
            return {
                ...state,
                approve_error: '',
                approve_status: '',
                approve_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.GETUSER:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    admin_users: action.payload.data,
                }
            }
            else {
                return {
                    ...state,
                    admin_users_error: action.payload.data.error,
                    admin_users_status: action.payload.status,
                    admin_users_statusText: action.payload.statusText
                }
            }
        default:
            return {
                ...state
            }
    }

}
export const SetWinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.SETWINNER:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    winner: action.payload.data,
                    winner_status: action.payload.status,
                    winner_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    winner_error: action.payload.data.error,
                    winner_status: action.payload.status,
                    winner_statusText: action.payload.statusText
                }
            }
        case Constant.SETWINNERCLEAR:
            return {
                ...state,
                winner_error: '',
                winner_status: '',
                winner_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const DeletAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.DELETEACCOUNT:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    delete: action.payload.data,
                    delete_status: action.payload.status,
                    delete_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    delete_error: action.payload.data.error,
                    delete_status: action.payload.status,
                    delete_statusText: action.payload.statusText
                }
            }
        case Constant.DELETEACCOUNTCLEANUP:
            return {
                ...state,
                delete_error: '',
                delete_status: '',
                delete_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const DeletAuctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.DELETEAUCTION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    delete_auction: action.payload.data,
                    delete_auction_status: action.payload.status,
                    delete_auction_statusText: action.payload.statusText
                }
            }
            else {
                return {
                    ...state,
                    delete_auction_error: action.payload.data.error,
                    delete_auction_status: action.payload.status,
                    delete_auction_statusText: action.payload.statusText
                }
            }
        case Constant.DELETEAUCTIONCLEANUP:
            return {
                ...state,
                delete_auction_error: '',
                delete_auction_status: '',
                delete_auction_statusText: ''
            }
        default:
            return {
                ...state
            }
    }

}
export const SendFeedBackReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.SENDFEEDBACK:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    feedbacks: action.payload.data,
                    feedbacks_status: action.payload.status,
                    feedbacks_statusText: action.payload.statusText
                }
            } else {
                return {
                    ...state,
                    feedbacks_error: action.payload.data.error,
                    feedbacks_status: action.payload.status,
                    feedbacks_statusText: action.payload.statusText
                }
            }
        case Constant.CLEANFEEDBACK:
            return {
                ...state,
                feedbacks_error: '',
                feedbacks_status: '',
                feedbacks_statusText: ''
            }
        case Constant.GETFEEDBACK:
            return {
                ...state,
                feedbacks: action.payload.data,
            }
        default:
            return {
                ...state
            }
    }

}
