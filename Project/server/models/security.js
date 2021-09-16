const mongoose = require("mongoose");

const SecuritySchema = new mongoose.Schema({
        // SGID will be auto generated for each security group entry
        sgid : {
            type : Number
        },
        ipadrs : {
            type : String
        },
        ipadrs : {
            type : String
        },

        sub : {
            type : String
        },

        sgn : {
            type : String
        },
        sgnote : {
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
