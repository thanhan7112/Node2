const mongoose = require("mongoose");

const FooterSchema = mongoose.Schema({
    Services: {
        type: String
    },
    ServicesDetail:{
        type: String
    },
    About:{
        type: String
    },
    AboutDetail:{
        type: String
    },
    ShopName:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
    collection:"Footers"
});

module.exports = mongoose.model("Footer", FooterSchema);