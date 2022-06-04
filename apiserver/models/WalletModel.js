const mongoose = require("mongoose");

const WalletSchema = mongoose.Schema({
    AddressWallet: {
        type: String,
    },
    Owner:{
        type: String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
   collection:"wallet" 
});
module.exports = mongoose.model('Wallet', WalletSchema);