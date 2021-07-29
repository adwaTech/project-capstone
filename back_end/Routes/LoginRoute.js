
const UserModel=require('../models/Users')

const bcrypt = require('bcrypt');

module.exports=LoginRoute= async (req,res)=>{

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
        await UserModel.findOne({username:username,usertype:usertype}).then(
            response=>{
                
                if(response){
                    if(bcrypt.compareSync(myPlaintextPassword, hash)){
                        res.json({success:true,usertype:response.usertype,error:[],username:response.username});
                    }else{
                        error.push("incorrect user name or password");
                        res.json({success:false,usertype:'',error:error,username:''});
                    }
                    // bcrypt.compareSync(myPlaintextPassword, hash);
                    // bcrypt.compare(password, response.password ).then(function(result) {
                    //     if(result){
                    //         res.json({success:true,usertype:response.usertype,error:[],username:response.username});
                    //     }else{
                    //         error.push("incorrect user name or password");
                    //         res.json({success:false,usertype:'',error:error,username:''});
                    //     }
                    // });
                }else{
                    error.push("incorrect username or user type");
                    res.json({success:false,usertype:'',error:error,username:''});
                }
            }
        ).catch(error=>console.log(error));
    }
    else{
        res.json({success:false,typeOfUser:'',error:error,username:''});
    }

}