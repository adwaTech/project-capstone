const { feedbackSchema, FeedbackModel } = require("../models/feedback");
const { createModel } = require("./toolFuntions");

module.exports = async (req, res) => {
    if (req.body.feedback && req.body.feedback.length > 0) {
        req.body.userId = req.user._id;
        const feedback = createModel(req.body, FeedbackModel(), feedbackSchema);
        return res.send(
            await feedback.save()
        );
    }
    return res.status(400).send({
        error: 'Feedback body must be supplied on req.body.feedback'
    })
}