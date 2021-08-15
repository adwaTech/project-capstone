const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes')
// require timers.js
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('', router)
// create setInterval callbacks
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/capston-project', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log('our database is running on port 27017')
})
app.listen(PORT, console.log(`server is running on port${PORT}`))