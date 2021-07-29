const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        IPAMID : {
            type:Number
        },
        UserName : {
            type:String
        },
        UserType : {
            type:String
        },
        UserPri : {
            type:String
        },
        Notes : {
            type:String
        },
        Date : {
            type:Date
        },
        Version : {
            type:Number
        },
        Delete : {
            type:String
        }
})

const UseTable = new mongoose.model("UseTable", UserSchema);

module.exports = UseTable;
