import * as Constant from './Constants';
import axios from 'axios';
import {
    BACKENDURL
} from './Constants'

export const LoginAction = (userData) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const response = await axios.post(`http://localhost:5000/login`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        });
        dispatch({
            type: Constant.ACCOUNT,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: Constant.ACCOUNT,
            payload: data,
        })
    }
}
export const AccountCheckoutAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.ACCOUNTCHECKOUT,
        payload: data,
    })
}
export const RegisterAction = (userData) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const response = await axios.post(`http://localhost:5000/register`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        })
        dispatch({
            type: Constant.ACCOUNT,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: Constant.ACCOUNT,
            payload: data
        })
    }

}
export const LanguageAction = (language) => async (dispatch) => {
    dispatch({
        type: Constant.LANGUAGE,
        payload: language,
    })
}
export const LogoutAction = () => async (dispatch) => {
    const data = {
        data: {
            user: { },
            token: '',
            status: '',
        }
    }
    dispatch({
        type: Constant.LOGOUT,
        payload: data
    })
}
export const PostAuctionAction = (userData, token) => async (dispatch) => {

    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        
            const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data'
                'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
            },
            
        });
        const response = await axiosInstance.post(`/postAuction`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.POSTAUCTION,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.POSTAUCTION,
            payload: data,
        })
        console.log(error);
    }
}
export const BidCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.CLEANUPBIDAUCTION,
        payload: data,
    })
}
export const PostCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.CLEANUPPOSTAUCTION,
        payload: data,
    })
}

export const AllAuctionAction = () => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`,
        {
            params: { type: "all" }
        }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.ALL_AUCTION,
        payload: response.data,
    })
}
export const AllExceptAuctionAction = (auctioner) => async (dispatch) => {

    try{
        const response = await axios.get(`http://localhost:5000/getAuctions`, {

        params: {
            type: "all-e", auctioneer: auctioner
        }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.ALL_EXCEPT_AUCTIONER,
        payload: response.data,
    })
    }
    catch(error){
        
    }
}
export const AuctionerAuctionAction = (auctioner) => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`, {
        params: { type: "auctioneer", auctioneer: auctioner }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.GET_AUCTION_BY_AUCTIONER,
        payload: response.data,
    })
}
export const PopularAuctionAction = () => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`, {
        params: { type: "popular" }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.POPULAR_AUCTION,
        payload: response.data,
    })
}
export const CatagoryAuctionAction = (category) => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`, {
        params: { type: "category", category: category }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.CATAGORY_AUCTION,
        payload: response.data,
    })
}
export const IdAuctionAction = (id) => async (dispatch) => {

    try{
        const response = await axios.get(`http://localhost:5000/getAuctions`, {
        params: { type: "id", id: id }
        }, {
            validateStatus: function (status) {
                return status < 600
            }
        })
        dispatch({
            type: Constant.AUCTION_BY_ID,
            payload: response.data,
        })
    }catch(error){
        
    }
}
export const LatestAuctionAction = () => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`, {
        params: { type: "latest" }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.LATEST_AUCTION,
        payload: response.data,
    })
}
export const BidAuctionAction = (userData, token) => async (dispatch) => {

    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/bid`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.BID_AUCTION,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.BID_AUCTION,
            payload: data,
        })
    }
}
export const SearchAuctionAction = (userData) => async (dispatch) => {
    const response = await axios.get(`http://localhost:5000/search`, {
        params: { query: userData }
    }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.SEARCH_AUCTION,
        payload: response.data,
    })
}
export const GetAuctionAuctionAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/getBids`, {

            params: {
                type: "owner",
            }
        }, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.GET_BID_AUCTION,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.GET_BID_AUCTION,
            payload: data,
        })
    }
}
export const GetNotificationAuctionAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/getNotifications`, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.GET_NOTIFICATION,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.GET_NOTIFICATION,
            payload: data,
        })
    }
}
export const DepositAuctionAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/deposit`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.DEPOSIT,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.DEPOSIT,
            payload: data,
        })
    }
}
export const DepositCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.DEPOSITCLEANUP,
        payload: data,
    })
}
export const WithdrawAuctionAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/withdraw`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.WITHDRAW,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.WITHDRAW,
            payload: data,
        })
    }
}
export const WithdrawCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.WITHDRAWCLEANUP,
        payload: data,
    })
}
export const UpdateBalanceAction = (userData, operator) => async (dispatch) => {

    dispatch({
        type: Constant.UPDATEBALANCE,
        payload: userData,
        operator: operator
    })
}

export const ProfileAuctionAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/profile`, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.USERPROFILE,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.USERPROFILE,
            payload: data,
        })
    }
}
export const UpdateCustomerAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {

        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.put(`/updateCustomer`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.UPDATEPROFILE,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: Constant.UPDATEPROFILE,
            payload: data
        })
    }

}
export const ShowNotificationAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {

        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/setNotification`, { notificationId: userData }, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.SHOWNOTIFICATION,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: Constant.SHOWNOTIFICATION,
            payload: data
        })
    }

}
export const ApproveAuctionAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {

        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.put(`/approveAuction`, { auctionId: userData }, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.APPROVEAUCTION,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: Constant.APPROVEAUCTION,
            payload: data
        })
    }

}
export const GetuserAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/getUsers`, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.GETUSER,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.GETUSER,
            payload: data,
        })
    }
}
export const SetWinnerAuctionAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/setWinner`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.SETWINNER,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.SETWINNER,
            payload: data,
        })
    }
}
export const SetwinnerCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.SETWINNERCLEAR,
        payload: data,
    })
}
export const DeleteCustomerAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.put(`/deleteCustomer`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.DELETEACCOUNT,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.DELETEACCOUNT,
            payload: data,
        })
    }
}
export const DeleteAccountCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.DELETEACCOUNTCLEANUP,
        payload: data,
    })
}
export const DeleteAuctionAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.put(`/deleteAuction`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.DELETEAUCTION,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.DELETEAUCTION,
            payload: data,
        })
    }
}
export const DeleteAuctionCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.DELETEAUCTIONCLEANUP,
        payload: data,
    })
}
export const GetAllAuctionAction = () => async (dispatch) => {

    const response = await axios.get(`http://localhost:5000/getAuctions`,
        {
            params: { type: "allx" }
        }, {
        validateStatus: function (status) {
            return status < 600
        }
    })
    dispatch({
        type: Constant.GETALLAUCTION,
        payload: response.data,
    })
}
export const FeedbackAction = (userData, token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/sendFeedback`, userData, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.SENDFEEDBACK,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.SENDFEEDBACK,
            payload: data,
        })
    }
}
export const FeedbackCleanUpAction = () => async (dispatch) => {
    const data = {
        data: {
            error: "",
        },
        status: '',
        statusText: ""
    }
    dispatch({
        type: Constant.CLEANFEEDBACK,
        payload: data,
    })
}
export const GetFeedbackAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/getFeedbacks`, {
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.GETFEEDBACK,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.SETWINNER,
            payload: data,
        })
    }
}
export const SetCookieAction = (userData) => async (dispatch) => {

    const data = {
        data: {
            user: userData.user,
            token: userData.token
        },
        status: 200,
        statusText: "Ok"
    }
    dispatch({
        type: Constant.GETCOOKIE,
        payload: data,
    })
}
export const generateTokenAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.get(`/generateToken`,{
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.GENERATEROUTE,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.GENERATEROUTE,
            payload: data,
        })
    }
}
export const PayAction = (token) => async (dispatch) => {
    const data = {
        data: {
            error: "Please check your network connection",
        },
        status: 404,
        statusText: "Network Error"
    }
    try {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
            timeout: 5000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const response = await axiosInstance.post(`/pay`,{
            validateStatus: function (status) {
                return status < 600
            }
        },
        );
        dispatch({
            type: Constant.PAY,
            payload: response,
        })
    }
    catch (error) {
        dispatch({
            type: Constant.PAY,
            payload: data,
        })
    }
}