const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes');
const { UserModel, UserSchema } = require('./models/Users');
const types = require('./models/types');
// require timers.js
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('',router);
app.use(express.static("uploads"));
// create setInterval callbacks
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/capston-project', { useNewUrlParser: true, useUnifiedTopology: true }).then(async res => {
    console.log('our database is running on port 27017');
    if(! await UserModel.findById(types.systemUserId)){
        UserModel({
            _id: types.systemUserId,
            email:'m3kAuctions@gmail.com',
            phone:'011454323',
            password:'1234ghyt',
            idPhoto:'m3k.jpg',
            idNo:'m3k',
            city:'Addis Ababa',
            sex:'Undefined',
            firstName:'M3K',
            lastName:'Auctions',
        }).save();
    }
})
app.listen(PORT, console.log(`server is running on port${PORT}`))