const mongoose = require('mongoose');
const auctionRule = require('./AuctionRule');
const user = require('./Users');
const auctionCategory = require('./AuctionCatagory');

const auction = mongoose.Schema({
    auctionName: {
        type: String,
        required: true,
    },
    briefDescription: {
        type: String,
        required: true
    },
    // allPay: { // charity 
    //     type: Boolean,
    //     default: false
    // },
    bidFee: { // 
        type: Number,
        default: 0,
    },
    minAmount: { // 
        type: Number,
        required: true
    },
    minCpo: { // 
        type: Number,
        default: 0,
    },
    owner: {
        type: String, // owner id
        required: true
    },
    auctionType: {
        type: String,
        required: true,
    },
    auctionCategory: {
        type: String, // category id
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    extendedDescription: {
        type: String,
    },
    status: {
        type: String, // ended, open, inactive
        default: 'open'
    },
    approval: { // for administrator purposes
        type: Boolean,
        default: false
    },
    postedOn: {
        type: Date,
        default: Date.now()
    },
    startDate: {
        type: Date
    },
    deadline: {
        type: Date,
        required: true
    },
    latitude: {
        type: String,
    },
    longtude: {
        type: String
    },
    proposals: [String]
});
module.exports.AuctionModel = mongoose.model('auction', auction);
module.exports.AuctionSchema = auction;