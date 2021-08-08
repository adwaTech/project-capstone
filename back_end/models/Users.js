const mongoose =require('mongoose');
<<<<<<< HEAD
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
=======


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
>>>>>>> main
        default:Date.now()
    },
    idNumber:{
        type:String,
<<<<<<< HEAD
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
=======
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
>>>>>>> main
    },
    location:{
        type:Array,
        
<<<<<<< HEAD
    },
    profileImage:{
        type:String,
    }
});
module.exports=UserModel=mongoose.model('user',Users);
    
=======
    }

});
module.exports=UserModel=mongoose.Schema('user',User);
>>>>>>> main
