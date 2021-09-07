const { NotificationModel } = require("../models/notification")

module.exports = async (req, res) => {
    if (req.body.notificationId) {
        const notification = await NotificationModel.findById(req.body.notificationId);
        if (notification) {
            const x = [];
            const index = notification.participants.findIndex((value) => value.userId == req.user._id);
            if (index === -1) return res.status(400).send({
                error: 'This notification doesn\'t belong this user'
            })
            notification.participants[index].isRead = true;
            return res.send(await notification.save());
        }
        return res.status(400).send({
            error: 'Notification not found'
        })
    }
    return res.status(400).send({
        error: 'req.body.notificationId was not found'
    })
}