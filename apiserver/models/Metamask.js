const mongoose = require('mongoose');

const MetaSchema = mongoose.Schema({
    hash:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    Name:{
        type:String,
        required: true
    },
    Price:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
    collection:"Metamask"
});

module.exports = mongoose.model("MetaPay", MetaSchema);