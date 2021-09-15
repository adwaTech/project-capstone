const { validateBody, createModel } = require('./toolFuntions');
const { proposalSchema, proposalModel } = require('../models/Proposal');
const { AuctionModel } = require('../models/Auctions');
const types = require('../models/types');
const { encrypt } = require('./encryption');
const { pay } = require('./pay');
const { UserModel } = require('../models/Users');
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
    if (auction.owner == req.user._id) return res.status(400).send({
        error: `bidder '${req.user._id}' is the owner of auction of id '${auction._id}'`
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
    if (auction.minAmount > proposal.amount)
        return res.status(400).send({
            error: 'amount is below minAmount'
        })
    const duplicate = await proposalModel.find({
        ownerId: req.user._id,
        auctionId: req.body.auctionId
    })
    if (duplicate.length == 0)
        if (auction.minCpo) {
            if (!proposal.cpo) return res.status(400).send({
                error: 'minCPO is required for this auction'
            })
            if (auction.minCpo > proposal.cpo)
                return res.status(400).send({
                    error: 'cpo is below minCPO'
                })
        }

    if (duplicate.length > 0 && !(auction.allPay || auction.auctionType === types.auctionType[0]))
        return res.status(400).send({
            error: 'you can\'t bid twice for this auction'
        });
    // if (auction.allPay) {
    //     // order payment
    //     // payment shall be an extension of all proposals
    //     const payee = await UserModel.findById(auction.owner);
    //     const lastBid = (await proposalModel.find({
    //         _id: { $in: auction.proposals}
    //     }).sort({
    //         amount: -1
    //     }).limit(1))[0].amount;
    //     if(proposal.amount<lastBid)
    // }
    if (auction.bidFee > 0) {
        // order payment
        const payer = await UserModel.findById(req.user._id);
        const payee = await UserModel.findById(auction.owner);
        if (!await pay(payer, auction.bidFee, payee, types.paymentType.auctionFee))
            return res.status(412).send({
                error: 'Insufficient Funds for AuctionFee'
            })
    }
    if (auction.minCpo > 0) {
        const payer = await UserModel.findById(req.user._id);
        const payee = await UserModel.findById(auction.owner);
        if (!await pay(payer, proposal.cpo, payee, types.paymentType.auctionCpo))
            return res.status(412).send({
                error: 'Insufficient Funds for CPO'
            })
    }
    // then
    if (proposal.proposalType === types.proposalType[1])
        proposal.amount = encrypt(proposal.amount);
    const result = await proposal.save();
    auction.proposals.push(result._id);
    await auction.save();
    if (result && auction) return res.send(result);
    return res.status(500).send({
        error: 'Internal server error'
    });
}