const { validateBody, createModel } = require('./toolFuntions');
const { AuctionModel, AuctionSchema } = require('../models/Auctions');
const types = require('../models/types');
const { UserModel } = require('../models/Users');
const { pay } = require('./pay');
module.exports = async (req, res) => {
    if (req.files && req.files.length > 0) {
        req.body.images = [];
        req.files.map(image => req.body.images.push(image.filename));
    }
    req.body['owner'] = req.user._id;
    req.body['status'] = 'open';
    let err = validateBody(req.body, AuctionSchema, ['auctionType', 'auctionCategory']);
    if (Date.parse(req.body.deadline) <= Date.now()) return res.status(400).send({
        error: 'Invalid deadline'
    })
    if (req.body.auctionType === types.auctionType[0] && !req.body.startDate)
        err += '#Start date is required for this auction';
    else if (req.body.auctionType === types.auctionType[0])
        if (Date.parse(req.body.startDate) >= Date.parse(req.body.deadline) || Date.parse(req.body.startDate) <= Date.now())
            return res.status(400).send({
                error: 'Invalid startDate and/or deadline value/s'
            });
    if (err)
        return res.status(400).send({
            error: err
        })
    let auction = createModel(req.body, AuctionModel(), AuctionSchema);
    const payer = await UserModel.findById(req.user._id);
    if (! await pay(payer, types.fee.postAuctionFee, null, types.paymentType.postAuction))
        return res.status(412).send({
            error: 'Insufficent Funds'
        })
    auction.save().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            error: 'Internal server error',
            errorStackTrace: err
        })
    })
}