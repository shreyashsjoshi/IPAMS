const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        ipamid : {
            type : Number
        },
        uname : {
            type : String
        },
        utype : {
            type : String
        },
        upri : {
            type : String
        },
        notes : {
            type : String
        },
        date : {
            type : String
        },
        version : {
            type:Number
        },
        delete : {
            type:String
        }
})

const Usetable = new mongoose.model("utable", UserSchema);

module.exports = Usetable;
