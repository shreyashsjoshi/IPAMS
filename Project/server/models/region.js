const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const RegionSchema = new mongoose.Schema({
    //regionID will be auto generated when region is entered
    regionid:{
        type : String,
    },
    region:{
        type : String
    },
    postaladdress: {
        type : Number,

    },
    notes : {
        type :  String,

    },
    date : {
        type : String
    },
    version : {
        type : Number,

    },

    delete : {
        type : String
    }


})

const Area = new mongoose.model("where", RegionSchema);

module.exports = Area;

