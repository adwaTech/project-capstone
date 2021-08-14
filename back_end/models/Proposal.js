const mongoose = require('mongoose');


const proposal = mongoose.Schema({
    proposalType: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: String,
        required: true,
    },
    cpo: {
        type: Number,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    },
    auctionId: {
        type: String,
        required: true,
    },
    proposalDocument: {
        type: String
    },
    submittedOn: {
        type: Date,
        default: Date.now()
    },
    status: { // if won or lost or pending
        type: String,
        default:'pending'
    }
});
module.exports.proposalModel = mongoose.model('proposal', proposal);
module.exports.proposalSchema = proposal;