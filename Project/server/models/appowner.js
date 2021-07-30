const mongoose = require("mongoose");

const OwnSchema = new mongoose.Schema({
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
