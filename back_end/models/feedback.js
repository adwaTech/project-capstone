const mongoose = require('mongoose');
const feedbackSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    feedback:{
        type:String,
        required:true
    },
    newResponse:{
        type:Boolean,
        default:false
    },
    response:{
        type:String
    }
})

module.exports.feedbackSchema = feedbackSchema;
module.exports.FeedbackModel = mongoose.model('feedback',feedbackSchema);