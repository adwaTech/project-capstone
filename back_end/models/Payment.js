const mongoose =require('mongoose');


const payment=mongoose.Schema({
    paymentname:{
        type:String,
        require:true,
    },
    transactionDate:{
        type:String,
        require:true,
        default:Date.now()
    },
    transactionType:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
});
module.exports=paymentModel=mongoose.Schema('payment',payment);