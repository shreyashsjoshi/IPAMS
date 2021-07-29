const mongoose = require("mongoose");

const SecuritySchema = new mongoose.Schema({
        SecutiryGroupID : {
            type : Number
        },
        SecutiryGroupName : {
            type : String
        },
        Notes : {
            type: String
        },
        StartDate : {
            type : Date
        },
        EndDate : {
            type: Date
        },

        Delete : {
            type:String
        }

})

const Sec = new mongoose.model("safe", SecuritySchema)

module.exports = Sec;
