const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
        ApplicationTypeID : {
            type:Number
        },
        
        ApplicationTypeName : {
            type:String
        },
        
        ApplicationTypeNotes : {
            type:String
        },
        Date : {
            type:Date
        },
        Delete : {
            type:String
        }
})

const Apps = new mongoose.model("apptable", AppSchema);

module.exports = Apps;
