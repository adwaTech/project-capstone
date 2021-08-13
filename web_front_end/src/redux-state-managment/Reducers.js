import * as Constant from './Constants';
import {strings} from '../language/language'

let initialState={
    item:{
        isLogedIn:false,
        username:'',
        password:'',
        error:[]
    },
    user:{},
    token:'',
    error:'',
    status:'',
    statusText:'',
    language:'en',
    whichBtn:'',
    
}

export const AccountReducer=(state=initialState,action)=>{
    switch(action.type){
        case Constant.ACCOUNT:
            if(action.payload.status===200){
                var now = new Date();
                var time = now.getTime();
                var expireTime = time + 1000*36000;
                now.setTime(expireTime);
                document.cookie = `user=${action.payload.data.user}; token=${action.payload.data.token} ; expires=${now.toUTCString()}; path=/`;
                return{
                    ...state,
                    user:action.payload.data.user,
                    token:action.payload.data.token
                }
            }else{
                return{
                    ...state,
                    error:action.payload.data.error,
                    status:action.payload.status,
                    statusText:action.payload.statusText
                }
            }
            
        default:
            return {
                ...state
            }
    }

}
export const LanguageReducer=(state=initialState,action)=>{
    switch(action.type){
        case Constant.LANGUAGE:
            return{
                ...state,
                language:action.payload
            }
        default:
            return {
                ...state
            }
    }

}
export const LogoutReducer=(state=initialState,action)=>{
    switch(action.type){
        case Constant.LOGOUT:
            return{
                ...state,
                user:{},
                token:'',
            }
        default:
            return {
                ...state
            }
    }
}
