const mongoose = require('mongoose');

const MetaSchema = mongoose.Schema({
    // xdata:{
    //     type: String
    // },
    hash:{
        type: String
    },
    to:{
        type: String
    },
    Price: {
        type: String
    },
    from:{
        type: String
    },
    Name:{
        type: String
    },
    ether:{
        type: String
    },
    date:{
        type: String,
        default: Date.now
    },
},{
    collection:"meta"
}
);

module.exports = mongoose.model('MetaM', MetaSchema);