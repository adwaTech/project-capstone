
const jwt = require('jsonwebtoken');
const passport = require('passport');
module.exports = LoginRoute = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) return res.status(400).send({
            error: 'Login failed'
        });
        req.login(user, { session: false }, err => {
            if (err) return res.send(err);
        })
        const token = jwt.sign(user.toJSON(), 'customer_login_secret');
        return res.send({
            user, token
        })
    })(req, res);
}