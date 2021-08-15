const express = require('express');
const router = express();
const multer = require('multer');
require('./passport')
const LoginRoute = require('./LoginRoute');
const RegisterRoute = require('./RegisterCustomer');
const updateCustomerRoute = require('./UpdateCustomer');
const deleteCustomerRoute = require('./DeleteCustomer');
const bidForAuctionRoute = require('./bidForAuction');
const getAuctionsRoute = require('./getAuctions');
const payRoute = require('./pay');
const postAuctionRoute = require('./postAuction');
const sendFeedbackRoute = require('./send_feedback');
const getFeedbacks = require('./getFeedbacks');
const approveAuction = require('./approveAuction');
const getSearchRoute = require('./search');
const getBidsRoute = require('./getBids');
const passport = require('passport');
const getBids = require('./getBids');
const sync = require('./sync');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toFixed() + file.originalname); // hello.jpg hello.jgp
    },
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/^image\//i))
            return cb(null, true)
        cb(Error('Incorrect File Format'), false);
    }
});
router.use(sync);
// Customer routes
router.post("/register", (req, res, next) => {
    upload.fields(
        [{
            name: 'profileImage',
            maxCount: 1
        },
        {
            name: 'idPhoto',
            maxCount: 1
        }]
    )(req, res, (err) => {
        if (err) return res.status(400).send({
            error: 'Invalid file'
        })
        next();
    })
}, RegisterRoute);
router.post("/login", upload.any(), LoginRoute);
router.put("/updateCustomer", passport.authenticate('jwt', { session: false }), updateCustomerRoute);
router.post('/bid', passport.authenticate('jwt', { session: false }), upload.any(), bidForAuctionRoute);
router.get('/getAuctions', getAuctionsRoute);
router.get('/getBids', passport.authenticate('jwt', { session: false }), getBidsRoute);
router.get('/search', getSearchRoute)
router.post('/pay', passport.authenticate('jwt', { session: false }), payRoute);
router.post('/postAuction', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    upload.array('images', 10)(req, res, (err) => {
        if (err) return res.status(400).send({
            error: 'Invalid file',
            errorStackTrace: err
        })
        next();
    })
}, postAuctionRoute);
router.post('/sendFeedback', passport.authenticate('jwt', { session: false }), sendFeedbackRoute);

// Admin routes
router.get("/getFeedbacks", passport.authenticate('jwt', { session: false }), getFeedbacks);
router.put("/approveAuction", passport.authenticate('jwt', { session: false }), approveAuction);

// Common routes
router.delete("/deleteCustomer", passport.authenticate('jwt', { session: false }), deleteCustomerRoute);
module.exports = router;