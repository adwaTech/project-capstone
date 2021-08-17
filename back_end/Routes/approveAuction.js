const AdminLog = require("../models/adminlog");
const { AuctionModel } = require("../models/Auctions");
const types = require("../models/types")

module.exports = async (req, res) => {
    // get auction reference
    // set auction approval to true
    let error = '';
    if (req.user.userType === types.userType[1])
        if (req.body.auctionId) {
            const auction = await AuctionModel.findById(req.body.auctionId).catch(err => error = err);
            if (error !== '') return res.status(400).send({
                error: `No auction with id '${req.body.auctionId}' was found`
            });
            const log = AdminLog({
                adminId: req.user._id,
                operation: types.adminOperations[0],
                data: [{
                    auctionId: auction._id
                }]
            });
            if (req.body.description)
                log.description = req.body.description;
            auction.approval = true;
            await log.save();
            await auction.save();
            return res.send({
                auction, log
            });
        }
    return res.status(403).send({
        error: 'You are not authorized for this operation'
    });
}