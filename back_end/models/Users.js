const mongoose =require('mongoose');


const User=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true
    },  
    createdat:{
        type:String,
        require:true,
        default:Date.now()
    },
    idNumber:{
        type:String,
        require:true
    },
    sex:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true,
    },
    insurance:{
        type:Boolean,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    location:{
        type:Array,
        
    }

});
module.exports=UserModel=mongoose.Schema('user',User);