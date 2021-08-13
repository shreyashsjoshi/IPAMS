const mongoose = require("mongoose");

const OwnSchema = new mongoose.Schema({
        //appownerid will be auto generated for each security group entrywill be auto generated for each security group entry
        appownerid : {
            type:Number
        },
        appownermail : {
            type:String
        },
        apptelephone : {
            type:Number
        },
        appfname : {
            type:String
        },
        applname : {
            type:String
        },
        appcrit : {
            type:String
        },
        date : {
            type: String
        },
        delete : {
            type:String
        }
})

const AppOwn = new mongoose.model("Whose", OwnSchema);

module.exports = AppOwn;
