const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");
const { validateBody } = require("./toolFuntions")

module.exports = async (req, res) => {
    if (req.query.type)
        switch (req.query.type) {
            case 'auction':
                if (!req.query.auctionId) return res.status(400).send({
                    error: 'No auctionId was sent'
                });
                const auction = await AuctionModel.findById(req.query.auctionId);
                if (auction)
                    return res.send(auction.proposals);
                return res.status(400).send({
                    error: `No auction with id '${req.query.auctionId}' was found`
                });
            case 'owner':
                const proposals = await proposalModel.find({ ownerId: req.user._id })
                if (req.query.status) {
                    let temp = [];
                    switch (req.query.status) {
                        case 'won':
                            proposals.map(proposal => {
                                if (proposal.status === 'won')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                        case 'lost':
                            proposals.map(proposal => {
                                if (proposal.status === 'won')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                        case 'pending':
                            proposals.map(proposal => {
                                if (proposal.status === 'won')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                    }
                } else {
                    if (proposals.length > 0)
                        return res.send(proposals);
                    return res.status(400).send({
                        error: `No proposals were made by user of id '${req.user._id}'`
                    });
                }
            default:
                res.status(400).send({
                    error: `value '${req.query.type}' for req.query.type was Invalid`
                })
        }
    return res.status(400).send({
        error: 'Missing req.query.type'
    });
}