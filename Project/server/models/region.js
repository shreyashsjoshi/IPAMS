const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    regionid:{
        type : Number

    },
    region:{
        type : String
    },
    postaladdress: {
        type : Number,
        required :true
    },
    notes : {
        type :  String,
        required : true
    },
    date : {
        type : Date
    },
    version : {
        type : Number,
        required : true
    },

    delete : {
        type : String
    }


})

const Area = new mongoose.model("where", RegionSchema);

module.exports = Area;

