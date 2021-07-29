const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    RegionID:{
        type : Number
    },
    Region:{
        type : String
    },
    PostalAddress: {
        type : Number
    },
    Notes : {
        type :  String
    },
    Date : {
        type : Date,
    },
    Version : {
        type : Number
    },

    Delete : {
        type : String
    }


})

const Area = new mongoose.model("where", RegionSchema);

module.exports = Area;

