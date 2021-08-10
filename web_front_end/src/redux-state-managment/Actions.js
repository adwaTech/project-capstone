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
    
       const {data} = await axios.post(`http://localhost:5000/register`,userData,{
           validateStatus:function (status){
               return status<500
           }
       })
       
       console.log(data);
    //    .then(response=>console.log('response',response))
    //    .catch(err=>console.log('error is ',err))
       //console.log(data);
       //.catch(error=>console.log(`myerror :${error}`));
        // console.log(data);
        // dispatch({
        //     type:Constant.REGISTER,
        //     payload:data.data,
        // })

}