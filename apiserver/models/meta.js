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
MetaSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.metaId = _id;
    return object;
  });
module.exports = mongoose.model('MetaM', MetaSchema);