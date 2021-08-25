module.exports = {// auctionCategory should be dynamic
    auctionType: ['live', 'sealed'],
    auctionCategory: ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'],
    proposalType: ['live', 'sealed'],
    proposalStatus: {
        won: 'won',
        lost: 'lost',
        pending: 'pending',
        waitingResult: 'waitingresult',
        notPayed: 'notpayed'
    },
    auctionStatus: {
        open: 'open',
        ended: 'ended',
        archieved: 'archieved'
    },
    paymentMethod:{
        cbeBirr: 'cbebirr',
        amole:'amole'
    },
    paymentType: {
        bidWon: 'bidwon',
        postAuction: 'postauction',
        auctionFee: 'auctionfee',
        auctionCpo: 'auctioncpo',
        returnCpo: 'returncpo'
    },
    userType: ['customer', 'admin'],
    sex: ['male', 'female'],
    adminOperations: ['auctionapproval'],
    fee: {
        postAuctionFee: 10,
        winnerFeePercentage: 5
    },
    systemUserId: '507f191e810c19729de860ea'
};