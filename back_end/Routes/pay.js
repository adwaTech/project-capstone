module.exports = (req, res) => {
    // payment needs payee
    // payment needs auction or proposal
    // payment needs amount
    // payment transfers money from payee balance to auctioneer balance
    console.log(req.body);
    res.send({
        status: 'payed'
    })
}