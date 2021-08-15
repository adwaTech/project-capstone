const { AuctionModel } = require('../models/Auctions');
function requiredParamError(param) {
    return `field '${param}' is required for this search`;
}
module.exports = async (req, res) => {
    if (req.query.type)
        switch (req.query.type) {
            case 'all':
                return res.send(await AuctionModel.find({
                    status: 'open'
                }));
            case 'all-e':
                if (req.query.auctioneer)
                    return res.send(await AuctionModel.find({
                        owner: { $ne: req.query.auctioneer },
                        status: 'open'
                    }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'auctioneer':
                if (req.query.auctioneer)
                    return res.send(await AuctionModel.find({ owner: req.query.auctioneer }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'popular':
                return res.send(await AuctionModel.find({ status: 'open' }).sort({ participants: -1 }));
            case 'category':
                if (req.query.category)
                    return res.send(await AuctionModel.find({ auctionCategory: req.query.category, status: 'open' }));
                return res.status(400).send({
                    error: requiredParamError('category')
                })
            case 'id':
                if (req.query.id){
                    const auction = await AuctionModel.findById(req.query.id).catch(err=>console.log(err))
                    if(auction)
                        return res.send(auction);
                    return res.status(400).send({
                        error: 'Invalid id'
                    })
                }
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
        error: 'missing req.query.type'
    })
}