const mongoose = require('mongoose');
const insurance = mongoose.Schema({
    document: {
        type: String, // file name
        required: true
    },
    documentType: {
        type: String,
        required: true
    }
})
module.exports = insuranceModel = mongoose.model('insurance', insurance);