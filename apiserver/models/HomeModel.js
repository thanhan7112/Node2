const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    MainTitle: {
        type: String
    },
    TitleSub:{
        type: String
    },
    MainTitle2: {
        type: String
    },
    MainTitle3: {
        type: String
    },
    PhoneNumber:{
        type: String
    },
    EmailShop:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
    collection:"HomePage"
});
HomeSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.homeId = _id;
    return object;
  });
module.exports = mongoose.model("Home", HomeSchema);