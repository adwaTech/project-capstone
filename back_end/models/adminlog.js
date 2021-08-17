const mongoose = require('mongoose');
const logSchema = mongoose.Schema({
    adminId: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = AdminLog = mongoose.model('AdminLog', logSchema);