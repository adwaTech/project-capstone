const UserModel=require('../model/UserModel');

module.exports=LoginRoute= async (req,res)=>{
    const userName=req.params.userName;
    const password=req.params.password;
    const usertype=req.params.type;
    let error=[];
    if(!userName){
        error.push("username must be provide");
    }
    if(!password){
        error.push("password must be provided");
    } 
    if(!usertype){
        error.push("user type must be porvided")
    }  
    if(error.length==0){
        await UserModel.findOne({userName:userName,password:password,typeOfUser:typeOfUser}).then(
            response=>{
                if(response){
                    res.json({success:true,usertype:response.usertype,error:[],username:response.username});
                }else{
                    error.push("incorrect username,password or type of user");
                    res.json({success:false,usertype:'',error:error,username:''});
                }
            }
        ).catch(error=>console.log(error));
    }
    else{
        res.json({success:false,typeOfUser:'',error:error,userName:''});
    }
}