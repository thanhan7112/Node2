const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Name:{
        type: String,
        require:true
    },
    Price: {
        type: Number,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    // imgPost:{
    //     type: String
    // },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);