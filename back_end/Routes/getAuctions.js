const { AuctionModel } = require('../models/Auctions');
function requiredParamError(param) {
    return `field '${param}' is required for this search`;
}
module.exports = async (req, res) => {
    if (req.body.type)
        switch (req.body.type) {
            case 'all':
                return res.send(await AuctionModel.find({
                    status: 'open'
                }));
            case 'all-e':
                if (req.body.auctioneer)
                    return res.send(await AuctionModel.find({
                        owner: { $ne: req.body.auctioneer },
                        status: 'open'
                    }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'auctioneer':
                if (req.body.auctioneer)
                    return res.send(await AuctionModel.find({ owner: req.body.auctioneer }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'popular':
                return res.send(await AuctionModel.find({ status: 'open' }).sort({ participants: -1 }));
            case 'category':
                if (req.body.category)
                    return res.send(await AuctionModel.find({ auctionCategory: req.body.category, status: 'open' }));
                return res.status(400).send({
                    error: requiredParamError('category')
                })
            case 'id':
                if (req.body.id)
                    return res.send(await AuctionModel.findById(req.body.id));
                return res.status(400).send({
                    error: requiredParamError('id')
                });
            case 'latest':
                return res.send(await AuctionModel.find({
                    status: 'open',
                    postedOn: { $gte: Date.now() - 86400000 }
                }))
            default:
                return res.status(400).send({
                    error: 'Invalid search parameter \'type\''
                });
        }
    return res.status(400).send({
        error: 'missing req.body.type'
    })
}