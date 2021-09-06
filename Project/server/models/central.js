const mongoose = require("mongoose");

const CentralSchema = new mongoose.Schema({

ipam : {
    type : String
},
region : {
    type : String
},
ipad : {
    type : Number
},
subnet : {
    type : Number
},
gateway : {
    type : Number
},
vlanID:{
    type : Number
},
date : {
    type : String
},

requestID : {
    type : String
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

const Central = new mongoose.model("central", CentralSchema);

module.exports = Central;
