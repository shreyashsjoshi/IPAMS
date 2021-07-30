const mongoose = require("mongoose");

const SecuritySchema = new mongoose.Schema({
        sgid : {
            type : Number
        },
        sgn : {
            type : String
        },
        notes : {
            type: String
        },
        sdate : {
            type : String
        },
        edate : {
            type: String
        },

        delete : {
            type:String
        }

})

const Sec = new mongoose.model("secure", SecuritySchema)

module.exports = Sec;
