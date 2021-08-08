import * as Constant from './Constants';

let initialState={
    item:{
        isLogedIn:false,
        username:'',
        password:'',
        error:[]
    },
    
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
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }

}