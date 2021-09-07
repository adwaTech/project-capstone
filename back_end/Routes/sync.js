// check for auction deadline
// if closed update all bids related
// send email to auctioneers
const { AuctionModel } = require('../models/Auctions');
const { proposalModel } = require('../models/Proposal');
const types = require('../models/types');
const { UserModel } = require('../models/Users');
const { decrypt } = require('./encryption');
const { NotificationModel, notificationSchema } = require('../models/notification');
const { createModel } = require('./toolFuntions');
async function sendMail(auctioneers) {
    let emails = [];
    await auctioneers.map(async (auctioneer) => {
        emails.push((await UserModel.findById(auctioneer)).email)
    })
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: emails,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = (req, res, next) => {
    let auctioneers = [];
    AuctionModel.find({
        status: 'open'
    }).then(async (auctions) => {
        //console.log(auctions);
        for (auction of auctions) {
            if (auction.deadline < Date.now().toString()) {
                auction.status = 'ended';
                auctioneers.push(auction.owner);
                for (proposalId of auction.proposals) {
                    proposal = await proposalModel.findById(proposalId);
                    proposal.status = 'waitingresult';
                    if (proposal.type == types.proposalType[1])
                        proposal.amount = decrypt(proposal.amount);
                    await proposal.save();
                }
                await auction.save();
                // prepare notification
                let participants = [];
                for (proposal of auction.proposals) {
                    let id = (await proposalModel.findById(proposal)).ownerId;
                    if (!participants.every((element)=>element.ownerId!=id))
                        participants.push({
                            userId: id
                        })
                }
                participants.push(auction.owner);
                const notification = createModel({
                    notificationType: types.notificationType.auctionDueDate,
                    auctionId: auction._id,
                    participants: participants,
                    title: 'Auction due date!',
                    detail: `The auction ${auction.auctionName} is due date. click to see list of all bidders`
                }, NotificationModel(), notificationSchema);
                await notification.save();
            }
        }
        // send emails
        // sendMail(auctioneers);
    })
    next();
}