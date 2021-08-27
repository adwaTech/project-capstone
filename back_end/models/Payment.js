const mongoose = require('mongoose');
const proposal = require('./Proposal');

const payment = mongoose.Schema({
    transactionDate: {
        type: Date,
        default: Date.now()
    },
    transactionType: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    payer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true,
    },
    payee: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    description: {
        payerNewBalance: {
            type: Number,
            required: true
        },
        payeeNewBalance: {
            type: Number,
            required: true
        }
    }
});
module.exports = paymentModel = mongoose.model('payment', payment);