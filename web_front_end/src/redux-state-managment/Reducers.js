import * as Constant from './Constants';
let initialState = {
    item: {
        isLogedIn: false,
        username: '',
        password: '',
        error: []
    },
    user: {},
    token: '',
    error: '',
    status: '',
    statusText: '',
    language: 'en',
    whichBtn: '',
    postauction: {},
    // autions types
    allAuction: [],
    allexcept: [],
    idAuction: [],
    catagoryAuction: [],
    popularAuction: [],
    latestAuction: [],
    AuctioneerAuction: [],
    bid: {},
    biderror: '',
    bidstatus: '',
    bidstatusText: '',
    // search
    auctionsWithName: [],
    auctionsWithCategory: [],
    cities: [],
    usersWithFirstName: [],
    usersWithLastName: []
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
                user: {},
                token: ''
            }
        case Constant.ACCOUNTCHECKOUT:
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