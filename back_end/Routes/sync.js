// check for auction deadline
// if closed update all bids related
// send email to auctioneers
const { AuctionModel } = require('../models/Auctions');
const { proposalModel } = require('../models/Proposal');
const { UserModel } = require('../models/Users');
const { decrypt } = require('./encryption');
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
// TODO: Remove all unneccessary await/async functions
module.exports = (req, res, next) => {
    let auctioneers = [];
    AuctionModel.find({
        status: 'open'
    }).then(async (auctions) => {
        //console.log(auctions);
        await auctions.map(async (auction) => {
            if (auction.deadline < Date.now().toString()) {
                auction.status = 'ended';
                auctioneers.push(auction.owner);
                await auction.proposals.map(async (proposalId) => {
                    proposal = await proposalModel.findById(proposalId);
                    proposal.status = 'waitingresult';
                    proposal.amount = decrypt(proposal.amount);
                    await proposal.save();
                });
                await auction.save();
            }
        })
        // send emails
        // sendMail(auctioneers);
    })
    next();
}