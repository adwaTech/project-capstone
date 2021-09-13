const { AuctionModel } = require('../models/Auctions');
const { UserModel } = require('../models/Users');
function requiredParamError(param) {
    return `field '${param}' is required for this search`;
}
// async function getExpandedAuctions(auctions) {
//     let temp = [];
//     for (let auction of auctions)
//         temp.push({
//             auction: auction,
//             user: await UserModel.findById(auction.owner)
//         });
//     return temp;
// }
function findAuctions(option) {
    return AuctionModel.find(option).populate({
        path: 'owner',
        select: 'firstName lastName sex city userType profileImage'
    });
}
// async function getExpandedAuction(auction) {
//     return {
//         auction: auction,
//         user: await UserModel.findById(auction.owner)
//     };
// }
module.exports = async (req, res) => {
    let error = '';
    if (req.query.type)
        switch (req.query.type) {
            case 'allx':
                return res.send(await findAuctions({}));
            case 'all':
                return res.send(await findAuctions({
                    status: 'open'
                })
                );
            case 'all-e':
                if (req.query.auctioneer)
                    return res.send(await findAuctions({
                        owner: { $ne: req.query.auctioneer },
                        status: 'open'
                    }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'auctioneer':
                if (req.query.auctioneer)
                    return res.send(await findAuctions({ owner: req.query.auctioneer }).populate({
                        path: 'proposals',
                        populate: {
                            path: 'ownerId',
                            select: 'firstName lastName sex city userType profileImage'
                        }
                    }));
                return res.status(400).send({
                    error: requiredParamError('auctioneer')
                })
            case 'popular':
                let props = await findAuctions({ status: 'open' });
                props.sort((a, b) => b.proposals.length - a.proposals.length);
                return res.send(props);
            case 'category':
                if (req.query.category)
                    return res.send(await findAuctions({ auctionCategory: req.query.category, status: 'open' }));
                return res.status(400).send({
                    error: requiredParamError('category')
                })
			case 'live':
                    return res.send(await findAuctions({ auctionType: 'live', status: 'open' }));
                
            case 'id':
                if (req.query.id) {
                    const auction = await AuctionModel.findById(req.query.id).catch(err => error = err)
                    if (error == '')
                        return res.send(await auction.populate({
                            path: 'owner',
                            select: 'firstName lastName sex city userType profileImage'
                        }));
                    return res.status(400).send({
                        error: 'Invalid id',
                        errorStackTrace: error
                    })
                }
                return res.status(400).send({
                    error: requiredParamError('id')
                });
            case 'latest':
                return res.send(await findAuctions({
                    status: 'open',
                    postedOn: { $gte: Date.now() - 86400000 }
                }));
            default:
                return res.status(400).send({
                    error: 'Invalid search parameter \'type\''
                });
        }
    return res.status(400).send({
        error: 'missing req.query.type'
    })
}