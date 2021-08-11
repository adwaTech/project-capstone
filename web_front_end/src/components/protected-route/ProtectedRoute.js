import {Route,Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function ProtectedRoute({component:Component,...rest}){
    const token = useSelector((state) => state.RegisterReducer.token);
    return (
        <Route {...rest} render={(props)=>{
            if(token){
                return(
                <Component {...props} />
                )
            }
            else{
                return (
                   <Redirect to={
                       {
                       pathname:"/login",
                       state:{
                           from:props.location
                       }
                   }}/>
               )
            }
        }}/>
    )
}