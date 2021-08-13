const { validateBody, createModel } = require('./toolFuntions');
const { proposalSchema, proposalModel } = require('../models/Proposal');
const { AuctionModel } = require('../models/Auctions');
const types = require('../models/types');
module.exports = async (req, res) => {
    // based on auction type encrypt amount
    // OPEN OR CLOSED
    req.body.ownerId = req.user._id;
    const err = validateBody(req.body, proposalSchema, ['proposalType']);
    if (err)
        return res.status(400).send({
            error: err
        });
    let error = '';
    const auction = await AuctionModel.findById(req.body.auctionId).catch(err => error += err)
    if (error) return res.status(400).send({
        error
    });
    const proposal = createModel(req.body, proposalModel(), proposalSchema);
    if (auction.auctionType !== proposal.proposalType)
        return res.status(400).send({
            error: `Invalid proposal type '${proposal.proposalType}' for auction of type '${auction.auctionType}'`
        })
    const duplicate = await proposalModel.find({
        owner: req.user._id
    })
    if (duplicate && !(auction.allPay || auction.auctionType === types.auctionType[0]))
        return res.status(400).send({
            error: 'you can\'t bid twice for this auction'
        });
    const result = await proposal.save();
    auction.proposals.push(result._id);
    await auction.save();
    if (result && auction) return res.send(result);
    return res.status(500).send({
        error: 'Internal server error'
    });
}