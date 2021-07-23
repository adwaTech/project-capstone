const mongoose =require('mongoose');


const catagory=mongoose.Schema({
    catagoryname:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
});
module.exports=catagoryModel=mongoose.Schema('catagory',catagory);