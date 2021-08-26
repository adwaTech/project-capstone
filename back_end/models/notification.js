const mongoose = require('mongoose');
const schema = mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    notificationType:{
        type:String,
        required:true
    },
    auctionId:{
        type:String,
        required:true
    },
    participants:{
        type:[
            {
                userId:String,
                isRead:{
                    type:Boolean,
                    default:false
                }
            }
        ], // mesi
    },
    title:{
        type:String,
        default:'New Notification'
    },
    detail:{
        type:String,
        default:''
    }
});
module.exports.notificationSchema = schema;
module.exports.NotificationModel = mongoose.model('notification',schema);