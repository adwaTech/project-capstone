const { UserModel, UserSchema } = require('../models/Users');
const bcrypt = require('bcrypt');
const { validateBody, createModel } = require('./toolFuntions');
const tokenMOdel = require('../models/tokens');
const types = require('../models/types');
const saltRounds = 10;
module.exports = async (req, res) => {
    if (req.files) {
        if (req.files['idPhoto'])
            req.body.idPhoto = req.files['idPhoto'][0].filename;
        if (req.files['profileImage'])
            req.body.profileImage = req.files['profileImage'][0].filename;
    }
    const err = validateBody(req.body, UserSchema, ['userType', 'sexType']);
    if (err)
        return res.status(400).send({
            error: err
        });
    if (req.body.userType == types.userType[1]) { // check token
        if (req.body.adminToken) {
            const token = await tokenModel.findOne({
                token: req.body.adminToken,
            });
            if (token) {
                if (token.createdOn < Date.now() - 86400000) return res.status(403).send({
                    error: 'this token is expired'
                });
            } else return res.status(400).send({
                error: 'No token was found'
            })
        } else return res.status(400).send({
            error: 'adminToken is required'
        })
    }
    const user = createModel(req.body, UserModel(), UserSchema);
    user.save().then(result => {
        res.redirect(307, '/login');
    }).catch((err) => {
        if (err.name === 'MongoError' && err.code === 11000)
            res.status(400).send({
                error: 'duplicate',
                errorMessage: "Duplicated unique key was detected. This is because you have send a duplicated value for a uniqe attribute"
            });
        else {
            res.status(500).send({
                error: 'Internal Server Error'
            })
        }
    });
}
