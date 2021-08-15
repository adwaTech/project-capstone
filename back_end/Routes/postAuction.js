const { validateBody, createModel } = require('./toolFuntions');
const { AuctionModel, AuctionSchema } = require('../models/Auctions');
const types = require('../models/types');
module.exports = (req, res) => {
    if (req.files && req.files.length > 0) {
        req.body.images = [];
        req.files.map(image => req.body.images.push(image.filename));
    }
    req.body['owner'] = req.user._id;
    let err = validateBody(req.body, AuctionSchema, ['auctionType', 'auctionCategory']);
    if(req.body.auctionType === types.auctionType['0'] && !req.body.startDate)
        err +='Start date is required for this auction';
    if (err)
        return res.status(400).send({
            error: err
        })
    let auction = createModel(req.body, AuctionModel(), AuctionSchema);
    auction.save().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            error: 'Internal server error',
            errorStackTrace: err
        })
    })
}