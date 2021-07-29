const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    fname :{
        type : String

    },
    lastname :{
        type : String

    },
    email :{
        type : String,
        require : true

    },
    pass : {
        type : String,
        required : true

    },
    rpass : {
        type : String,
        required : true

    }


})



//To create a collections

const Register = new mongoose.model("users", EmployeeSchema);   


module.exports = Register;

