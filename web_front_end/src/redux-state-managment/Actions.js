import * as Constant from './Constants';
import axios from 'axios';

export const LoginAction=(userData)=>async (dispatch)=>{
    const response=await axios.post(`http://localhost:5000/login`,userData,{
        validateStatus:function (status){
            return status<600
        }
    });
    dispatch({
        type:Constant.ACCOUNT,
        payload:response,
    })
}
export const RegisterAction=(userData)=>async (dispatch)=>{
    
       const response = await axios.post(`http://localhost:5000/register`,userData,{
           validateStatus:function (status){
               return status<600
           }
       })
        dispatch({
            type:Constant.ACCOUNT,
            payload:response,
        })

}
export const LanguageAction=(language)=>async (dispatch)=>{
    dispatch({
        type:Constant.LANGUAGE,
        payload:language,
    })
}
export const LogoutAction=()=>async (dispatch)=>{
    const data={
        data:{
            user:{},
            token:'',
            status:200,
        }
    }
    console.log("yes yes")
    dispatch({
        type:Constant.LOGOUT,
        payload:data
    })
}