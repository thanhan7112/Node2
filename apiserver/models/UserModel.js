const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    Email: {
        type:String
    },
    Password:{
        type: String
    },
    Name:{
        type: String
    },
    MobileNumber:{
        type: String
    },
    // CardNumber:{
    //     type: String
    // },
    // Expiry:{
    //     type: String
    // },
    // CVV:{
    //     type: String,
    // },
    date:{
        type: Date,
        default: Date.now
    },
},{
   collection:"Users" 
});

module.exports = mongoose.model('Users', UserSchema);