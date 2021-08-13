const mongoose = require("mongoose");

const ApmSchema = new mongoose.Schema({
    //apmuuid will be auto generated for each security group entry
    apmuuid : {
        type:Number
    },
    apmid : {
        type:Number
    },
    appname : {
        type:String
    },
    appnotes : {
        type:String
    },
    date : {
        type: String
    },
    delete : {
        type:String
    }

})

const Apm = new mongoose.model("APMIDT", ApmSchema);

module.exports = Apm;
