const { User, UserSchema } = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = async (req, res) => {
    let err = '';
    if (req.files['idPhoto'])
        req.body.idPhoto = req.files['idPhoto'][0].filename;
    if (req.files['profileImage'])
        req.body.profileImage = req.files['profileImage'][0].filename;
    Object.keys(req.body).map(key => err += !(req.body[key]) ? `#${key} cannot be empty` : '');
    Object.keys(UserSchema.tree).map(key => {
        err += (UserSchema.tree[key].required && !(Object.keys(req.body).includes(key)))
            ? `#${key} is required` : '';
    });
    if (err !== '')
        return res.status(400).send({
            error: err
        });
    let user = User();
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    Object.keys(req.body).map(key => {
        user[key] = req.body[key];
    })
    user.save().then(result => {
        res.send({
            status: 'ok',
            user: result
        })
    }).catch((err) => {
        if (err.name === 'MongoError' && err.code === 11000)
            res.status(400).send({
                error: 'duplicate',
                errorMessage: "Duplicated unique key was detected. This is because you have send a duplicated value for a uniqe attribute"
            });
        else {
            console.log(err);
            res.status(500).send({
                error: 'Internal Server Error'
            })
        }
    });
}