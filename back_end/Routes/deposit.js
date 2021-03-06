const types = require("../models/types")
const { UserModel } = require("../models/Users")

module.exports = async (req, res) => {
    if (req.body.type && req.body.value) {
        const user = await UserModel.findById(req.user._id);
        let value = 0;
        try {
            value = parseFloat(req.body.value);
        } catch (e) {
            return res.status(400).send({
                error: 'Invalid req.body.value value',
                errorStackTrace: e
            })
        }
        if (value <= 0) return res.status(400).send({
            error: 'Invalid value'
        });
        switch (req.body.type) {
            case types.paymentMethod.cbeBirr:
                // set user balance temporarly
                user.balance = user.balance + value
                await user.save();
                return res.send({
                    newBalance:user.balance
                })
            case types.paymentMethod.amole:
                // set user balance temporarly
                user.balance = user.balance + value
                await user.save();
                return res.send({
                    newBalance:user.balance
                })
            default:
                return res.status(400).send({
                    error: 'invalid value for req.body.type'
                })
        }
    }
    return res.status(400).send({
        error: 'No value was specified at req.body.type and/or req.body.value'
    })
}