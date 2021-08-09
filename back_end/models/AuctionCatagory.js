const mongoose =require('mongoose');


const catagory=mongoose.Schema({
    catagoryname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
});
module.exports=catagoryModel=mongoose.model('catagory',catagory);