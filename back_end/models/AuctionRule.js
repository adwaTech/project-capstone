const mongoose =require('mongoose');

const auctionrule=mongoose.Schema({
    allPay:{
        type:Boolean,
        require:true,
    },
    bidFee:{
        type:Number,
        required:true
    },
    minAmount:{
        type:Number,
        required:true
    },
    minCPO:{
        type:Number
    }
});
module.exports.AuctionRuleModel =mongoose.model('auctionrule',auctionrule);
module.exports.AuctionRuleSchema = auctionrule;