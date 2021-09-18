const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    uname : {
        type : String
    },
    email : {
        type : String
    },
    ipad : {
        type : String
    }
})

const Admin = new mongoose.model("extra", AdminSchema);

module.exports = Admin;
