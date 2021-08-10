const mongoose =require('mongoose');
const proposal = require('./Proposal');

const payment=mongoose.Schema({
    transactionDate:{
        type:String,
        required:true,
        default:Date.now()
    },
    transactionType:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    payedFor:{
        type:String,
        required:true
    },
    proposal:{
        type:proposal,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});
module.exports=paymentModel=mongoose.model('payment',payment);