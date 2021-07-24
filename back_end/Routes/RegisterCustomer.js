const Users=require('../models/Users');

module.exports=RegisterRoute= async (req,res)=>{
    const username=req.body.username
    const usertype=req.body.usertype
    const password=req.body.password
    const conpassword=req.body.conpassword
    const firstname=req.body.firstname
    const lastName=req.body.lastName  
    // const createdat=req.body.createdat
    const idNumber=req.body.idNumber
    const sex=req.body.sex
    const insurance=req.body.insurance
    const phone=req.body.insurance
    const email =req.body.insurance
    const location=req.body.location
    const profileImage=req.body.profileImage;

    let error=[];
    if(!username){
        error.push("username is required");
    }
    if(!firstname){
        error.push("first name is required");
    }
    if(!lastname){
        error.push("lastname is required");
    }
    if(!idNumber){
        error.push("uid number is required");
    }
    if(!email){
        error.push("email is required");
    }
    if(!sex){
        error.push("sex is required");
    }
    if(!insurance){
        error.push("insurance is required");
    }
    if(!phone){
        error.push("phone is required");
    }
    if(!location){
        error.push("location is required");
    }
    if(!usertype){
        error.push("user type is required");
    }
    if(!conpassword){
        error.push('confirm password must be provided');
    }
    if(conpassword!==password){
        error.push('password and confirm password must be the same');
    }
    if(error.length==0){
        res.json({success:false,usertype:'',error:''});
    }
    else{
        if(req.file!=null){
            profileImage=req.files[0].originalname;

            await Users.find({username:username}).then(
                response=>{
                    if(response.length!==0){
                        error.push("this username is taken by other");
                        res.json({success:false,usertype:'',error:''});
                    }else{
                        new Users({
                            username,
                            firstname,
                            lastName,
                            usertype,
                            profileImage,
                            insurance,
                            sex,
                            phone,
                            location,
                            idNumber,
                            email,
                            password
                         }).save().then(response=>{
                             res.json({success:true,usertype:response.usertype,error:[]});
                         }).catch(error=>{
                             console.log(error);
                         })
                    }
                }
            ).catch(error=>console.log(error));
        }
        else{
            await Users.find({username:username}).then(
                response=>{
                    if(response.length!==0){
                        error.push("this username is taken by other");
                        res.json({success:false,usertype:'',error:''});
                    }else{
                        new Users({
                            username,
                            firstname,
                            lastName,
                            usertype,
                            insurance,
                            sex,
                            phone,
                            location,
                            idNumber,
                            email,
                            password
                         }).save().then(response=>{
                             res.json({success:true,usertype:response.usertype,error:[]});
                         }).catch(error=>{
                             console.log(error);
                         })
                    }
                }
            ).catch(error=>console.log(error));
        }
        
    }
}