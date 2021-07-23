const mongoose =require('mongoose');


const auctionrule=mongoose.Schema({
    auctionrulename:{
        type:String,
        require:true,
    },
    allpay:{
        type:Boolean,
        require:true,
    },
    minamount:{
        type:Number,
    },
    maxamount:{
        type:Number,
    },
    minCPO:{
        type:Number
    },
    bidamount:{
        type:Number
    },
    description:{
        type:String,
        require:true
    },
    other:{
        type:Array,
    }
});
module.exports=auctionruleModel=mongoose.Schema('auctionrule',auctionrule);