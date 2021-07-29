const mongoose = require("mongoose");

const InternetSchema = new mongoose.Schema({
    ipadders:{
        type : String
    },
    sub:{
        type : String
    }
})

const Ipadd = new mongoose.model("ipadr", InternetSchema);

module.exports = Ipadd;


