const mongoose = require('mongoose');
const types = require('./types');


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
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true,
    },
    auctionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'auction',
        required: true,
    },
    proposalDocument: {
        type: String
    },
    submittedOn: {
        type: Date,
        default: Date.now()
    },
    status: { // pending, waitingresult, lost, won //
        type: String,
        default: types.proposalStatus.pending
    }
});
module.exports.proposalModel = mongoose.model('proposal', proposal);
module.exports.proposalSchema = proposal;