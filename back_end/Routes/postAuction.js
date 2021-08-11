const { validateBody, createModel } = require('./toolFuntions');
const { AuctionModel, AuctionSchema } = require('../models/Auctions');
module.exports = (req, res) => {
    if (req.files && req.files.length > 0) {
        req.body.images = [];
        req.files.map(image => req.body.images.push(image.filename));
    }
    const err = validateBody(req.body, AuctionSchema, ['auctionType']);
    if (err)
        return res.status(400).send({
            error: err
        })
    let auction = createModel(req.body, AuctionModel(), AuctionSchema);
    res.send(auction);
}