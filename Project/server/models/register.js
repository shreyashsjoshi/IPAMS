const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

    },
    tokens:[{
        token:{
            type: String,
            required : true
        }
    }]


})

//generating tokens
EmployeeSchema.methods.generateAuthToken = async function(){
try{
        const token = jwt.sign({_id:this._id.toString()}, "mynameisshreyashjoshiassociateconsultant");
        this.tokens = this.tokens.concate({token:token})
        await this.save();
        return token;
        console.log(token);
    } catch(error){
        res.status(400).send("the error part" + error);
        console.log("the error part", + error);
}

}

//converting password into hash

EmployeeSchema.pre("save", async function(next) {

    if(this.isModified("pass")){
    //    const passwordHash = await bcrypt.hash(passsword, 10);   
//      console.log(`The current password is ${this.pass}`);
    this.pass = await bcrypt.hash(this.pass, 10);
//      console.log(`The current password is ${this.pass}`);
    this.rpass = undefined;

    }
        next();
})




//To create a collections

const Register = new mongoose.model("users", EmployeeSchema);   


module.exports = Register;

