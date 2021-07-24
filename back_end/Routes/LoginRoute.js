// const UserModel=require('../models/Users');
const UserModel=require('../models/Users')
module.exports=LoginRoute= async (req,res)=>{
    console.log("hello mesi");
    console.log(req.params)
    const username=req.params.username;
    const password=req.params.password;
    const usertype=req.params.usertype;
    let error=[];
    if(!username){
        error.push("username must be provide");
    }
    if(!password){
        error.push("password must be provided");
    } 
    if(!usertype){
        error.push("user type must be porvided")
    }  
    if(error.length==0){
        await UserModel.findOne({username:username,password:password,usertype:usertype}).then(
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
        res.json({success:false,typeOfUser:'',error:error,username:''});
    }
}