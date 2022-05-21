const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    CardNumber:{
        type: String
    },
    Expiry:{
        type: String,
        require:true
    },
    CVV: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {
    collection:"Payment"
});

module.exports = mongoose.model('Payments', PaymentSchema);