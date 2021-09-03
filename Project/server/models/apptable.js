const mongoose = require("mongoose");

const AppwhichSchema = new mongoose.Schema({
    appn : {
    type : String
    },

    appnote : {
        type : String
    },
    date :{
        type : String
    }

})


const Appwhich = new mongoose.model("application", AppwhichSchema);

module.exports= Appwhich;
