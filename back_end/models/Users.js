const mongoose = require('mongoose');
//const insurance = require('./Insurance')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    latitude: {
        type: Number
    },
    longtude: {
        type: Number
    },
    city: {
        type: String,
        required: true
    },
    idNo: {
        type: String,
        required: true
    },
    idPhoto: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: 'customer'
    },
    password: {
        type: String,
        required: true,
        set: (password) =>
            bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    balance:{
        type:Number,
        default:0   
    }
})
module.exports.UserModel = mongoose.model('user', User);
module.exports.UserSchema = User;