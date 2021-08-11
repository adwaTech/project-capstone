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
export const Login=(state=initialState,action)=>{
    switch(action.type){
        case Constant.LOGIN:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }

}
export const Register=(state=initialState,action)=>{
    switch(action.type){
        case Constant.REGISTER:
            if(action.payload.status===200){
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