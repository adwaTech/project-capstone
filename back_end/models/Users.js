const mongoose =require('mongoose');
const { Schema } = mongoose;

const Users = new Schema({
    username:{
        type:String,
        required:true,
    },
    usertype:{
        type:String,
        required:true,
        default:"customer"
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },  
    createdat:{
        type:String,
        required:true,
        default:Date.now()
    },
    idNumber:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    insurance:{
        type:Boolean,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:Array,
        
    },
    profileImage:{
        type:String,
    }
});
module.exports=UserModel=mongoose.model('user',Users);
    
