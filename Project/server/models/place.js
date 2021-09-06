const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    //region ID will be auto generated when region is entered

    regionid:{
        type : Number

    },
    city:{
        type : String
    },
    postaladdress: {
        type : Number,
        
    },
    noteregion : {
        type :  String,
       
    },
    date : {
        type : Date
    },
    version : {
        type : Number,
    },

    delete : {
        type : String
    }


})

const Jaaga = new mongoose.model("whereto", RegionSchema);


module.exports = Jaaga;


