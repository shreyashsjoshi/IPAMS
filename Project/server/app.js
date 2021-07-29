const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const bcrypt = require("bcryptjs");
const port = process.env.PORT   ||  2000;

const Register = require("./models/register");
const Ipadd = require("./models/registerip");
const Area = require("./models/region");0
 const Sec = require("./models/security");
// const Crit = require("./models/applicationcrit");
// const Apm = require("./models/apmid");
// const Apps = require("./models/application");
// const AppOwn = require("./models/appowner");
// const UseTable = require("./models/usertable");
// const AppTable = require("./models/apptable");



const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

require("./db/connection");

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/login",(req,res) => {
    res.render("login");

})

app.get("/logged",(req,res) => {
    res.render("logged");
})

//to login the user
app.post("/login", async (req, res) => {
    try{
            const email = req.body.email;
            const password = req.body.pass;

            const usermail = await Register.findOne({email:email});    
            if(usermail.pass === password){
                res.status(201).render("logged");
                }else{
                    res.send("Invalid login ID or Password");
                }
        }catch (error){
        res.status(400).send("Connection not established");
    }
    
})

//to store the IP address in the DB
app.post("/logged",async (req, res) => {
    try{
        const regiIp = new Ipadd({
        ipadders : req.body.ipadders,
        sub : req.body.sub
    })
        const ipadd = await regiIp.save();
        res.status(201).render("index")
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/regions",(req, res) =>{
    res.render("regions");
})

// to save regions
app.post("/regions",async (req, res) => {
    try{
        const place = new Area({
        regionid : req.body.regionid,
        region : req.body.region,
        postaladdress : req.body.postaladdress,
        notes : req.body.notes,
        version : req.body.version,
        delete : req.body.delete
    })
        const area = await place.save();
        res.status(201).render("index")
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/security", (req, res) => {
        res.render("security");
})
// to set the security group table details

app.post("/security", async (req, res) => {
    try{
        const secGT = new Sec({
            sgid : req.body.sgid,
            sgn : req.body.sgn,
            notes : req.body.notes,
            sdate : req.body.sdate,
            edate : req.body.edate,
            delete : req.body.delete

        })
            const sec = await secGT.save();
            res.status(201).render("index")
    }catch(error){
        res.status(400).send(error);

    }

}
)


app.get("/register",(req,res) => {
    res.render("register");
})
//to register the users into the DB
app.post("/register", async (req, res) =>{
    try{
        const password = req.body.pass;
        const rpassword = req.body.rpass;
        if(password === rpassword)
        {
            const registerEmp = new Register({
                fname : req.body.fname,
                lastname : req.body.lastname,
                email : req.body.email,
                pass : req.body.pass,
                rpass : req.body.rpass
            })
                const register = await registerEmp.save();
                res.status(201).render("index")
        }
    }   
    catch(error){
        res.status(400).send(error);
    }

})

app.listen(port,() =>{

    console.log(`The server is running on port ${port}`);
})



