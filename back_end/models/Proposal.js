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
    ownerId:{
        type:String,
        required:true,
    },
    auctionId:{
        type:String,
        required:true,
    },
    proposalDocument:{
        type:String
    },
    submittedOn:{
        type:Date,
        required:true,
        default:Date.now()
    }
});
module.exports=proposalModel=mongoose.model('proposal',proposal);