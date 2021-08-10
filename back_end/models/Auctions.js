const mongoose =require('mongoose');
const auctionRule = require('./AuctionRule');
const user = require('./Users');
const auctionCategory = require('./AuctionCatagory');

const auction=mongoose.Schema({
    auctionname:{
        type:String,
        required:true,
    },
    briefDescription:{
        type:String,
        required:true
    },
    rule:{
        type:auctionRule,
        required:true
    },
    owner:user,
    auctionType:{
        type:String,
        required:true,
    },
    auctionCategory:auctionCategory,
    image:{
        type:String,
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
module.exports=auctionModel=mongoose.model('auction',auction);