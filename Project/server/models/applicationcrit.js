const mongoose = require("mongoose");

const CritSchema = new mongoose.Schema({
        AppCritID : {
            type:Number
        },
        AppCritName : {
            type:String
        },
        AppCritNotes : {
            type:String
        },
        Date : {
            type:Date
        },
        Delete : {
            type:String
        }

})

const Crit = new mongoose.model("Critical", CritSchema);

module.exports = Crit;

