const mongoose = require("mongoose");

const OwnSchema = new mongoose.Schema({
        AppOwnerID : {
            type:Number
        },
        AppOwnemMail : {
            type:String
        },
        AppTelephone : {
            type:Number
        },
        AppFName : {
            type:String
        },
        AppLName : {
            type:String
        },
        AppCrit : {
            type:String
        },
        Date : {
            type:Date
        },
        Delete : {
            type:String
        }
})

const AppOwn = new mongoose.model("Whose", OwnSchema);

module.exports = AppOwn;
