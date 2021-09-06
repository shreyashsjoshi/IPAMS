const mongoose = require("mongoose");

const AppwhichSchema = new mongoose.Schema({
    appnm : {
    type : String
    },

    appnoteds : {
        type : String
    },

    date :{
        type : String
    }

})


const Appwhich = new mongoose.model("application", AppwhichSchema);

module.exports= Appwhich;
