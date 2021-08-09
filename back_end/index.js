const express =require( 'express');
const mongoose =require( 'mongoose');
const cors =require( 'cors');
const router = require('./Routes')
const PORT=6000;

const app=express();
app.use(cors());
app.use(express.json());
app.use('',router)

mongoose.connect('mongodb://localhost:27017/capston-project',{ useNewUrlParser: true,useUnifiedTopology: true  }).then(res=>{
    console.log('our database is running on port 27017')
})
app.listen(PORT,console.log('server is running on port 6000'))