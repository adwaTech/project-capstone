const { AuctionModel } = require("../models/Auctions");
const { proposalModel } = require("../models/Proposal");
const { validateBody } = require("./toolFuntions")

module.exports = async (req,res)=>{
    if(req.body.type)
        switch(req.body.type){
            case 'auction':
                if(!req.body.auctionId)return res.status(400).send({
                    error: 'No auctionId was sent'
                });
                const auction = await AuctionModel.findById(req.body.auctionId);
                if(auction)
                    return res.send(auction.proposals);
                return res.status(400).send({
                    error: `No auction with id '${req.body.auctionId}' was found`
                });
            case 'owner':
                if(req.body.status){
                    
                } else {
                const proposals = await proposalModel.find({ownerId:req.user._id})
                if(proposals.length>0)
                    return res.send(proposals);
                return res.status(400).send({
                    error: `No proposals were made by user of id '${req.user._id}'`
                });
            }
            default:
                res.status(400).send({
                    error: `value '${req.body.type}' for req.body.type was Invalid`
                })
        }
    return res.status(400).send({
        error: 'Missing req.body.type'
    });
}