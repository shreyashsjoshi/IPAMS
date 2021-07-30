const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
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
