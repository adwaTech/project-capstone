const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");
const types = require('../models/types')
module.exports = async (req, res) => {
    if (req.query.type)
        switch (req.query.type) {
            case 'auction':
                if (!req.query.auctionId) return res.status(400).send({
                    error: 'No auctionId was specified on req.query.auctionId'
                });
                const auction = await AuctionModel.findById(req.query.auctionId);
                if (auction) {
                    if (auction.auctionType != types.auctionType[0])
                        return res.status(403).send({
                            error: 'You are not authorized for this request'
                        });
                    let proposals = [];
                    for (let proposal of auction.proposals) {
                        proposals.push(await proposalModel.findById(proposal));
                    }
                    return res.send(proposals);
                }
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
                                if (proposal.status === 'lost')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                        case 'pending':
                            proposals.map(proposal => {
                                if (proposal.status === 'pending')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                        case 'waitingresult':
                            proposals.map(proposal => {
                                if (proposal.status === 'waitingresult')
                                    temp.push(proposal);
                            })
                            return res.send(temp);
                    }
                } else
                    return res.send(proposals);
            default:
                return res.status(400).send({
                    error: `value '${req.query.type}' for req.query.type was Invalid`
                })
        }
    return res.status(400).send({
        error: 'Missing req.query.type'
    });
}