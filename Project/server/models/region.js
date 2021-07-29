const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    regionid:{
        type : Number
    },
    region:{
        type : String
    },
    postaladdress: {
        type : Number
    },
    notes : {
        type :  String
    },
    date : {
        type : Date
    },
    version : {
        type : Number
    },

    delete : {
        type : String
    }


})

const Area = new mongoose.model("where", RegionSchema);

module.exports = Area;

