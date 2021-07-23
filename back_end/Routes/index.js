const express=require('express');
const router=express();
const multer=require('multer');
const path=require('path');


const LoginRoute =require('./LoginRoute');
const RegisterRoute=require('./RegisterCustomer');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
})

const upload=multer({storage:storage,limits:{fieldSize:24*1024*1024*1024}});

router.post("/registerCustomer",RegisterRoute)
router.get("/login/:userName/:password/:type",LoginRoute);

module.exports=router;