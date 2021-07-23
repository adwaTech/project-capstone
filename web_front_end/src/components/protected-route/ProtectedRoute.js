import {Route,Redirect} from 'react-router-dom'

export default function ProtectedRoute({component:Component,...rest}){
    // const canLogin=useSelector((state)=>state.featchInfo.user.success)

    return (
        <Route {...rest} render={(props)=>{
            if(true){
                return(
                <Component {...props}/>
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