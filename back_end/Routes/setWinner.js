const { AuctionModel } = require("../models/Auctions");
const { NotificationModel, notificationSchema } = require("../models/notification");
const { proposalModel } = require("../models/Proposal");
const types = require("../models/types");
const { UserModel } = require("../models/Users");
const { pay } = require('./pay');
const { createModel } = require("./toolFuntions");
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
            if (auction.status !== types.auctionStatus.ended) return res.status(404).send({
                error: 'This auction is open or archieved'
            })
            if (!auction.proposals.includes(req.body.proposalId))
                return res.status(400).send({
                    error: `The proposalId '${req.body.proposalId}' is not part of the auction with id '${req.body.auctionId}'`
                })
            const proposal = await proposalModel.findById(req.body.proposalId);
            const winner = await UserModel.findById(proposal.ownerId);
            const payee = await UserModel.findById(auction.owner);
            if (await pay(winner, parseFloat(proposal.amount), payee, types.paymentType.bidWon)) {
                proposal.status = types.proposalStatus.won
                // set notification for winner
                const winNotification = createModel({
                    notificationType: types.notificationType.bidWon,
                    auctionId: auction._id,
                    participants: [
                        { userId: proposal.ownerId }
                    ],
                    title: 'You have won your bid',
                    detail: `Congratulations! You have won the auction ${auction.auctionName}. Your payment was successfully done!`
                }, NotificationModel(), notificationSchema);
                await winNotification.save();
            }
            else {
                proposal.status = types.proposalStatus.notPayed;
                // set reminder for winner
                const payWonNotification = createModel({
                    notificationType: types.notificationType.bidWonPaymentNeeded,
                    auctionId: auction._id,
                    participants: [
                        { userId: proposal.ownerId }
                    ],
                    title: 'You have won your bid',
                    detail: `Congratulations! You have won the auction ${auction.auctionName}. You must finish your payment`
                }, NotificationModel(), notificationSchema);
                await payWonNotification.save();
            }
            // return cpos
            let loserParticipants = [];
            for (proposalId of auction.proposals) {
                const prop = await proposalModel.findById(proposalId);
                if (parseFloat(prop.amount) !== parseFloat(proposal.amount)) {
                    const returnee = await UserModel.findById(prop.ownerId);
                    await pay(payee, prop.cpo, returnee, types.paymentType.returnCpo)
                    prop.status = types.proposalStatus.lost;
                    loserParticipants.push({
                        userId: prop.ownerId
                    })
                    await prop.save();
                }
            }
            const losersNotification = createModel({
                notificationType: types.notificationType.bidLost,
                auctionId: auction._id,
                participants: loserParticipants,
                title: 'You have lost your bid',
                detail: `How unfortunate! You have lost your bid to the auction ${auction.auctionName}.`
            }, NotificationModel(), notificationSchema);
            await losersNotification.save();
            auction.status = types.auctionStatus.archieved;
            await auction.save();
            return res.send((await proposal.save()));
        }
        else return res.status(400).send({
            error: 'req.body.proposalId is required'
        })
    return res.status(400).send({
        error: 'req.body.auctionId is required'
    });
}