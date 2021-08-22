module.exports = {// auctionCategory should be dynamic
    auctionType: ['live', 'sealed'],
    auctionCategory: ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'],
    proposalType: ['live', 'sealed'],
    paymentType: {
        bidWon:'bidwon',
        allPayBid:'allpaybid',
        postAuction:'postauction',
        auctionFee:'auctionfee'
    },
    userType: ['customer', 'admin'],
    sex: ['male', 'female'],
    adminOperations: ['auctionapproval']
};