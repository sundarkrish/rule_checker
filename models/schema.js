const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const rcSchema = new Schema({

    rule: {
        type: String,
        default: "null",
    }, 
    deprecated: {
        type: Boolean,
        default: false,
    },
    enabled: {
        type: Boolean,
        default: false,
    }, 


});

const RCSchema = mongoose.model("rcSchema",rcSchema);
module.exports = RCSchema;