const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    fullName: {
        type: String
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    message:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
    collection:"Contacts"
});

module.exports = mongoose.model("Contact", ContactSchema);