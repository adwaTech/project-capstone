const { NotificationModel } = require("../models/notification")

module.exports = async (req, res) => {
    const notifications = await NotificationModel.find({
        'participants': { $elemMatch: { userId: req.user._id } }
    })
    res.send(notifications);
}