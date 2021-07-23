const mongoose =require('mongoose');


const insurance=mongoose.Schema({
    insurancename:{
        type:String,
        require:true,
    },
    varify:{
        type:Boolean,
        default:false,
        require:true
    },
    document:{
        type:String,
        require:true,
    },
    whoVarify:{
        type:String,
        require:true,
    },
    dateOfVarify:{
        type:String,
        default:Date.now(),
        require:true
    },
    signitureOfWhoVarify:{
        type:String,
    },
    description:{
        type:String,
        require:true
    },
});
module.exports=insuranceModel=mongoose.Schema('insurance',insurance);