const mongoose = require("mongoose");

const CritSchema = new mongoose.Schema({
        appcritid : {
            type : Number
        },
        appcritname : {
            type : String
        },
        appcritnote : {
            type : String
        },
        date : {
            type : String
        },
        delete : {
            type : String
        }

})

const Crit = new mongoose.model("Critical", CritSchema);

module.exports = Crit;

