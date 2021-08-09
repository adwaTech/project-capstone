const express=require('express');
const router=express();
const multer=require('multer');
const path=require('path');
const LoginRoute =require('./LoginRoute');
const RegisterRoute=require('./RegisterCustomer');
const updateCustomerRoute= require('./UpdateCustomer');
const deleteCustomerRoute = require('./DeleteCustomer');
const bidForAuctionRoute = require('./bidForAuction');
const getAuctionsRoute = require('./getAuctions');
const payRoute = require('./pay');
const postAuctionRoute = require('./postAuction');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
})

const upload=multer({storage:storage,limits:{fieldSize:24*1024*1024*1024}});

router.post("/registerCustomer",upload.single("Image"),RegisterRoute)
router.get("/login/:username/:password/:usertype",LoginRoute);
router.put("/updateCustomer",updateCustomerRoute);
router.delete("/deleteCustomer",deleteCustomerRoute);
router.post('/bid',bidForAuctionRoute);
router.get('/getAuctions',getAuctionsRoute);
router.post('/pay',payRoute);
router.post('/postAuction',postAuctionRoute);

module.exports=router;