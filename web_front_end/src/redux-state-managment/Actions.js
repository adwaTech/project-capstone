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
export const PostAuctionAction=(userData,token)=>async (dispatch)=>{
   const axiosInstance =  axios.create({
        baseURL: "http://localhost:5000",
        timeout: 5000,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }); 
    const response=await axiosInstance.post(`/postAuction`,userData,{
        validateStatus:function (status){
            return status<600
        }
    },
    );
    console.log(response);
    dispatch({
        type:Constant.POSTAUCTION,
        payload:response,
    })
}