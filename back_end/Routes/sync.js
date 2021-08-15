// check for auction deadline
// if closed update all bids related
const { AuctionModel } = require('../models/Auctions');
const { proposalModel } = require('../models/Proposal');
const { decrypt } = require('./encryption');
module.exports = (req, res, next) => {
    AuctionModel.find({
        status: 'open'
    }).then(auctions => {
        //console.log(auctions);
        auctions.map(auction => {
            if (auction.deadline < Date.now().toString()) {
                auction.status = 'ended';
                auction.proposals.map(async (proposalId) => {
                    proposal = await proposalModel.findById(proposalId);
                    proposal.status = 'waitingresult';
                    proposal.amount = decrypt(proposal.amount);
                    proposal.save();
                });
                auction.save();
            }
        })
    })
    next();
}