const mongoose =require('mongoose');
const auctionRule = require('./AuctionRule');
const user = require('./Users');
const auctionCategory = require('./AuctionCatagory');

const auction = mongoose.Schema({
    auctionName:{
        type:String,
        required:true,
    },
    briefDescription:{
        type:String,
        required:true
    },
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
    },
    owner:{
        type:String, // owner id
        required:true
    },
    auctionType:{
        type:String,
        required:true,
    },
    auctionCategory:{
        type:String, // category id
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    extendedDescription:{
        type:String,
    },
    status:{
        type:String // ended, open, inactive
    },
    approval:{ // for administrator purposes
        type:Boolean
    }
});
module.exports.AuctionModel = mongoose.model('auction',auction);
module.exports.AuctionSchema = auction;