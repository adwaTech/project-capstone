const mongoose =require('mongoose');


const proposal=mongoose.Schema({
    proposalType:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    amount:{
        type:Number,
        required:true,
    },
    cpo:{
        type:Number,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    auction:{
        type:String,
        required:true,
    },
    proposalDocument:{
        type:Buffer
    }
});
module.exports=proposalModel=mongoose.model('proposal',proposal);