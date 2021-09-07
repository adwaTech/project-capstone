const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");
const types = require("../models/types");
const { UserModel } = require("../models/Users");
const { pay } = require("./pay");

module.exports = async (req, res) => {
    if (req.user.userType == types.userType[1]) {
        if (req.body.auctionId) {
            const auction = await AuctionModel.findById(req.body.auctionId);
            if (!auction) return res.status(404).send({
                error: 'No auction was found with this id'
            });
            if (auction.proposals.length > 0 && auction.minCpo > 0) { // return cpos
                for (proposalId of auction.proposals) { // for every proposal
                    const proposal = await proposalModel.findById(proposalId);
                    const amount = proposal.cpo;
                    const payer = await UserModel.findById(auction.owner);
                    const payee = await UserModel.findById(proposal.ownerId);
                    const returned = await pay(payer, amount, payee, types.paymentType.returnCpo);
                    await proposalModel.findByIdAndRemove(proposal._id);
                }
            }
            await AuctionModel.findByIdAndRemove(auction._id);
            return res.send({
                success: 'deleted'
            })
        }
        return res.status(400).send({
            error: 'auctionId is required'
        })
    }
    return res.status(403).send({
        error: 'Not Authorized'
    });
}