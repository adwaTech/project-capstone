const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");

module.exports = async (req, res) => {
    if (req.body.auctionId)
        if (req.body.proposalId) {
            const auction = await AuctionModel.findById(req.body.auctionId);
            if (!auction) return res.status(400).send({
                error: `No auction with id '${req.body.auctionId}' was found`
            })
            if (auction.owner !== req.user._id) return res.status(403).send({
                error: 'You are not authorized for this auction'
            })
            if (!auction.proposals.includes(req.body.proposalId))
                return res.status(400).send({
                    error: `The proposalId '${req.body.proposalId}' is not part of the auction with id '${req.body.auctionId}'`
                })
            const proposal = await proposalModel.findById(req.body.proposalId);
            proposal.status = 'won';
            return res.send((await proposal.save()));
        }
        else return res.status(400).send({
            error: 'req.body.proposalId is required'
        })
    return res.status(400).send({
        error: 'req.body.auctionId is required'
    });
}