const { validateBody, createModel } = require('./toolFuntions');
const { proposalSchema, proposalModel } = require('../models/Proposal');
const { AuctionModel } = require('../models/Auctions');
const types = require('../models/types');
const { encrypt } = require('./encryption');
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
    if (!auction) return res.status(400).send({
        error: `No auction with id ${req.body.auctionId} was found`
    });
    const proposal = createModel(req.body, proposalModel(), proposalSchema);
    if (auction.auctionType !== proposal.proposalType)
        return res.status(400).send({
            error: `Invalid proposal type '${proposal.proposalType}' for auction of type '${auction.auctionType}'`
        })
    if (auction.deadline < Date.now().toString())
        return res.status(400).send({
            error: 'This auction is closed'
        })
    if (auction.auctionType === types.auctionType[0] && auction.startDate > Date.now().toString())
        return res.status(400).send({
            error: 'This auction hasn\'t opened yet!'
        })
    const duplicate = await proposalModel.find({
        ownerId: req.user._id,
        auctionId: req.body.auctionId
    })
    if (duplicate.length > 0 && !(auction.allPay || auction.auctionType === types.auctionType[0]))
        return res.status(400).send({
            error: 'you can\'t bid twice for this auction'
        });
    if (proposal.proposalType === types.proposalType[1])
        proposal.amount = encrypt(proposal.amount.toString());
    const result = await proposal.save();
    auction.proposals.push(result._id);
    await auction.save();
    if (result && auction) return res.send(result);
    return res.status(500).send({
        error: 'Internal server error'
    });
}