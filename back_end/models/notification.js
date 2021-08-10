const mongoose = require('mongoose');
module.exports = mongoose.model('notification',mongoose.Schema({
    auctionId:{
        type:String,
        required:true
    },
    participants:{
        type:Array, // mesi
    },
    message:{
        type:String,
        default:''
    }
}));