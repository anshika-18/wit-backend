const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema=new Schema({
    topic: {
        type: String,
    },
    resourceFormat: {
        type: String,
    },
    resourceUrl: {
        type: String,
    },

})

module.exports = mongoose.model("Resource", resourceSchema);