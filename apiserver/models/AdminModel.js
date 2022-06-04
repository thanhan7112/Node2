const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    },
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
    Detail: {
        type: String,
    },

    date:{
        type: Date,
        default: Date.now
    }
},{
   collection:"AdminData" 
});

module.exports = mongoose.model('Admin', AdminSchema);