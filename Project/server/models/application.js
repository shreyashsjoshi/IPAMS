const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
        //ATID will be auto generated for each security group entry
        atid : {
            type:Number
        },
        
        atname : {
            type:String
        },
        
        atnote : {
            type:String
        },
        date : {
            type: String
        },
        delete : {
            type:String
        }
})

const Apps = new mongoose.model("apptable", AppSchema);

module.exports = Apps;
