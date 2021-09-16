const crypto = require('crypto');
const TokenModel = require('../models/tokens');
const types = require('../models/types');
module.exports = async (req, res) => {
    if (req.user.userType != types.userType[1]) return res.status(403).send({
        error: 'Not authorized for this operation'
    });
    const token = crypto.randomBytes(48).toString('hex');
    const tokenModel = TokenModel({
        token: token
    });
    await tokenModel.save();
    return res.send(token);
}