const { FeedbackModel } = require("../models/feedback")

module.exports = async (req,res)=>{
    const feedbacks = await FeedbackModel.find({})
    res.send(feedbacks);
}