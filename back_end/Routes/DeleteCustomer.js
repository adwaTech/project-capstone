const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");
const types = require("../models/types");
const { UserModel } = require("../models/Users")

module.exports = async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    if (user.userType === types.userType[1]) { // if admin
        
        if (req.body.userId) {
            // check every auction and proposal for this user
            const deletable = await UserModel.findById(req.body.userId);
            const auctions = await AuctionModel.find({});
            const proposals = await proposalModel.find({});
            // if the user has pending auctions and/or proposals they can't be deleted
            for (auction of auctions)
                if (auction.owner === deletable._id && auction.status !== types.auctionStatus.archieved) return res.status(403).send({
                    error: 'user has pending auctions'
                })
            for (proposal of proposals)
                if (proposal.ownerId === deletable._id && proposal.status !== types.proposalStatus.lost && proposal.status !== types.proposalStatus.won)
                    return res.status(403).send({
                        error: 'user has pending proposals'
                    });
            return res.send(await UserModel.findByIdAndRemove(deletable._id));
        }
        else return res.status(400).send({
            error: 'req.body.userId is required'
        })
    }
    else if (user.userType === types.userType[0]) { // if customer
        // check every auction and proposal for this user
        const auctions = await AuctionModel.find({});
        const proposals = await proposalModel.find({});
        // if the user has pending auctions and/or proposals they can't be deleted
        for (auction of auctions)
            if (auction.owner === user._id && auction.status !== types.auctionStatus.archieved) return res.status(403).send({
                error: 'user has pending auctions'
            })
        for (proposal of proposals)
            if (proposal.ownerId === user._id && proposal.status !== types.proposalStatus.lost && proposal.status !== types.proposalStatus.won)
                return res.status(403).send({
                    error: 'user has pending proposals'
                });
        return res.send(await UserModel.findByIdAndRemove(user._id));
    }
    return res.status(500).send({
        error: 'Internal Server Error'
    });
}