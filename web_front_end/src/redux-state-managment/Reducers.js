import * as Constant from './Constants';

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
    statusText:''
    
}
export const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case Constant.LOGIN:
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
export const RegisterReducer=(state=initialState,action)=>{
    switch(action.type){
        case Constant.REGISTER:
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