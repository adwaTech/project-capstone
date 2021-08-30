const types = require('../models/types');
const { UserModel } = require('../models/Users');

module.exports.customerProfile = async (req, res) => {
    return res.send(await UserModel.findById(req.user._id));
}
module.exports.getUser = async (req, res) => {
    if (req.user.userType == types.userType[1]) {
        if (req.body.userId) {
            const user = await UserModel.findById(req.body.userId);
            if (user) return res.send(user);
            return res.status(404).send({
                error: 'No user was found with this id'
            });
        }
        else return res.status(400).send({
            error: 'req.body.userId was not found'
        })
    }
    else return res.status(403).send({
        error: 'Not authorized'
    });
}