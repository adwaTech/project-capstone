const Payment = require("../models/Payment");
const { proposalModel } = require("../models/Proposal");
const types = require("../models/types");
const { UserModel } = require("../models/Users");
async function pay(payer, amount, payee, type) {
    if (payer.balance < amount) return false;
    if (type == types.paymentType.bidWon && payer.balance < amount + amount * types.fee.winnerFeePercentage) return false;
    if (payer === payee) return false;
    if (!payee)
        payee = await UserModel.findById(types.systemUserId);
    payer.balance = payer.balance - amount;
    payee.balance = payee.balance + amount;
    if (type === types.paymentType.bidWon) {
        const systemPayee = UserModel.findById(types.systemUserId);
        const tax = amount * types.fee.winnerFeePercentage;
        payer.balance = payer.balance - tax
        systemPayee.balance = systemPayee.balance + tax
        await systemPayee.save();
        await Payment({
            transactionType: types.paymentType.bidWonTax,
            amount: tax,
            payer: payer._id,
            payee: systemPayee._id,
            description: {
                payerNewBalance: payer.balance,
                payeeNewBalance: systemPayee.balance
            }
        }).save();
    }
    await payer.save().catch(err => {
        return false;
    })
    await payee.save().catch(async err => {
        payer.balance = payer.balance + amount;
        await payer.save();
        return false;
    });
    await Payment({
        transactionType: type,
        amount,
        payer: payer._id,
        payee: payee._id,
        description: {
            payerNewBalance: payer.balance,
            payeeNewBalance: payee.balance
        }
    }).save();
    return true;
}
module.exports.pay = pay;
module.exports.route = async (req, res) => {
    // payment needs payee
    // payment needs auction or proposal
    // payment needs amount
    // payment transfers money from payee balance to auctioneer balance
    if (req.body.paymentType)
        switch (req.body.paymentType) {
            case types.paymentType.bidWon:
                if (req.body.proposal) {
                    // find proposal, check status, make transaction
                    const proposal = await proposalModel.findById(req.body.proposal);
                    if (!proposal) return res.status(400).send({
                        error: 'No proposal with this id was found'
                    })
                    if (proposal.status === 'won') {
                        let amount = proposal.amount;
                        const payer = await UserModel.findById(req.user._id);
                        const auction = await AuctionModel.findById(proposal.auctionId);
                        const payee = await UserModel.findById(auction.owner);
                        const result = await pay(payer, amount, payee);
                        if (result) {
                            auction.status = 'payed';
                            await auction.save();
                            proposal.status === 'payed';
                            await proposal.save();
                            return res.send({
                                message: 'Payment successful'
                            });
                        }
                    }
                    else return res.status(403).send({
                        error: 'You can\'t pay for this proposal. This might be because this proposal hasn\'t won!'
                    })
                }
                return res.status(400).send({
                    error: 'req.body.proposal was not found'
                })
            case types.paymentType.allPayBid:

            case types.paymentType.bidFee:
            case types.paymentType.postAuction:
            default: return res.status(400).send({
                error: 'Invalid value for paymentType'
            })
        }
    return res.status(400).send({
        error: 'req.body.paymentType was not found'
    })
}