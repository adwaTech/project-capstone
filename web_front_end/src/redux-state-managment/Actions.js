import * as Constant from './Constants';
import axios from 'axios';

export const LoginAction=(userData)=>async (dispatch)=>{
    console.log(userData);
    try{
        // const {data}=axios.get(`http://localhost:5000/login/${userData.userName}/${userData.password}/${userData.type}`)
        dispatch({
            type:Constant.LOGIN,
            // payload:data.data,
        })

    }
    catch(error){
        console.log(error);
    }
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