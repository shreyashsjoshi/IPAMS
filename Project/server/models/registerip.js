const mongoose = require("mongoose");

const InternetSchema = new mongoose.Schema({
    ipadders:{
        type : String
    },
    appown:{
        type : String,
        required : true
    },
    appcrit:{
        type : String,
        required : true
    },
    region:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    }
})

const Ipadd = new mongoose.model("ipadders", InternetSchema);

module.exports = Ipadd;


