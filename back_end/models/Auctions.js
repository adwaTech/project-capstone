const mongoose =require('mongoose');


const auction=mongoose.Schema({
    auctionname:{
        type:String,
        require:true,
    },
    rule:{
        type:Array,
    },
    ownner:{
        type:String,
        require:true
    },
    auctionType:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    condition:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
});
module.exports=auctionModel=mongoose.Schema('auction',auction);