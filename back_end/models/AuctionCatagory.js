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

module.exports.CatagoryModel=mongoose.model('catagory',catagory);
module.exports.CategorySchema = catagory;