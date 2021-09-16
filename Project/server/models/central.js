const mongoose = require("mongoose");

const CentralSchema = new mongoose.Schema({

ipam : {
    type : String
},
uname : {
    type : String
},
email : {
    type : String
},
region : {
    type : String
},
ipad : {
    type : String
},
subnet : {
    type : Number
},
gateway : {
    type : String
},
vlanID:{
    type : Number
},
date : {
    type : String
},

requestID : {
    type : Number
},

assigndby : {
    type : String
},
vmname : {
    type : String
},
dept : {
    type : String
},
secgrp : {
    type : String
},
appname : {
    type : String
},
apptype : {
    type : String
},
appown : {
    type : String
},
appmail : {
    type : String
},
comments : {
    type : String
},
faceapp : {
    type : String
},
aapm : {
    type : String
}

})

const Central = new mongoose.model("ct", CentralSchema);

module.exports = Central;
