const mongoose =require('mongoose');


const proposal=mongoose.Schema({
    proposalname:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    cpo:{
        type:Number,
        require:true,
    },
    awner:{
        type:String,
        require:true,
    },
    auction:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
});
module.exports=proposalModel=mongoose.Schema('proposal',proposal);