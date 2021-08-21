const { AuctionModel } = require('../models/Auctions');
const { UserModel } = require('../models/Users');
search = async (query) => {
    const exp = RegExp(`\.\*${query}\.\*`, 'i');
    return {
        auctionsWithName: await AuctionModel.find({
            auctionName: exp
        }),
        auctionsWithCategory: await AuctionModel.find({
            auctionCategory: exp
        }),
        auctionsWithBriefDescription: await AuctionModel.find({
            briefDescription: exp
        }),
        auctionsWithExtendedDescription: await AuctionModel.find({
            extendedDescription: exp
        }),
        cities: await UserModel.find({
            city: exp
        }),
        usersWithFirstName: await UserModel.find({
            firstName: exp
        }),
        usersWithLastName: await UserModel.find({
            lastName: exp
        }),
    }
}
module.exports = async (req, res) => {
    // search for auction titles, auction categories,
    // search for auctioneer names, city names
    if (req.query.query)
        return res.send(await search(req.query.query));
    return res.status(400).send({
        error: "req.query.query is required"
    })
}