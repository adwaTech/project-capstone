const mongoose =require('mongoose');
//const insurance = require('./Insurance')
const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    insurance:String,
    userType:{
        type:String,
        required:true,
        default:'customer'
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
module.exports=UserModel=mongoose.model('user',User);
