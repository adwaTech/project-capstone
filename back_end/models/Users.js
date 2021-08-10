const mongoose = require('mongoose');
//const insurance = require('./Insurance')
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
    profileImage:{
        type:String,
    },
    location:{
        type:String,
        required:true
    },
    locationLatitude: {
        type: Number
    },
    locationLongtude: {
        type: Number
    },
    city: {
        type: String,
        required: true
    },
    insurance: String,
    userType: {
        type: String,
        required: true,
        default: 'customer'
    },
    password: {
        type: String,
        required: true
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
})
module.exports.User = UserModel = mongoose.model('user', User);
module.exports.UserSchema = User;
