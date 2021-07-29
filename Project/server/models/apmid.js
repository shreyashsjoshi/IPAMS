const mongoose = require("mongoose");

const ApmSchema = new mongoose.Schema({
    ApmUUID : {
        type:Number
    },
    ApmID : {
        type:Number
    },
    AppName : {
        type:String
    },
    AppNotes : {
        type:String
    },
    Date : {
        type:Date
    },
    Delete : {
        type:String
    }

})

const Apm = new mongoose.model("APMIDT", ApmSchema);

module.exports = Apm;
