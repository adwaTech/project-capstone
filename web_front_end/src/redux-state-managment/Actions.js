import * as Constant from './Constants';
import axios from 'axios';

export const LoginAction=(userData)=>async (dispatch)=>{
    const response=await axios.post(`http://localhost:5000/login`,userData,{
        validateStatus:function (status){
            return status<600
        }
    });
    dispatch({
        type:Constant.LOGIN,
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
            type:Constant.REGISTER,
            payload:response,
        })

}