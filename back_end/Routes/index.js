const express = require('express');
const router = express();
const multer = require('multer');
const passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toFixed()+file.originalname); // hello.jpg hello.jgp
    },
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req,file,cb)=>{
        if(file.mimetype.match(/^image\//i))
        return cb(null,true)
        cb(Error('Incorrect File Format'),false);
    }
});

// Customer routes
router.post("/register", (req, res, next) => {
    upload.fields(
        [{
            name:'profileImage',
            maxCount:1
        },
        {
            name:'idPhoto',
            maxCount:1
        }]
    )(req, res, (err) => {
        if (err) return res.send({
            error: 'Invalid file'
        })
        next();
    })
}, RegisterRoute);
router.get("/login", LoginRoute);
router.put("/updateCustomer", updateCustomerRoute);
router.post('/bid', bidForAuctionRoute);
router.get('/getAuctions', getAuctionsRoute);
router.post('/pay', payRoute);
router.post('/postAuction', upload.any('auctionImages'), postAuctionRoute);
router.post('/sendFeedback', sendFeedbackRoute);

// Admin routes
router.get("/getFeedbacks", getFeedbacks);
router.put("/approveAuction", approveAuction);

// Common routes
router.delete("/deleteCustomer", deleteCustomerRoute);
module.exports = router;