//updated 04:30pm 30-08-21

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const bcrypt = require("bcryptjs");
const port = process.env.PORT   ||  2000;
const jwt = require("jsonwebtoken");  
const mongo = require('mongodb');
const start = Math.floor(Date.now()/1000);

const Register = require("./models/register");
const Ipadd = require("./models/registerip");
const Area = require("./models/region");
const Sec = require("./models/security");
const Apps = require("./models/application");
const Crit = require("./models/applicationcrit");
const Apm = require("./models/apmid");
const AppOwn = require("./models/appowner");
const Usetable = require("./models/usertable");
// const AppTable = require("./models/apptable");

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
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

//first page post user login
app.get("/first",(req,res) => {
    res.render("first");
})

app.post("/first",async (req, res) => {

    try{
            const where = new Area
            ({
                region:req.body.region,
                postal:req.body.postal
            })

           const area = await where.save();
           res.status(201).render("/second");

    }catch(error){  
        res.status(400).send("Connection not established");
    }

})


//second page
app.get("/second",(req,res) => {
    res.render("second");
})

app.get("/third",(req,res) => {
    res.render("third");
})

app.get("/fourth",(req,res) => {
    res.render("fourth");
})

app.get("/fifth",(req,res) => {
    res.render("fifth");
})

app.get("/sixth",(req,res) => {
    res.render("sixth");
})
app.get("/logged",async (req,res) => {
    const gettit = await Message.aggregate([
        {$match:{}}
    ])

    res.render("logged");
})

//logged user

app.get("/user",(req, res) => {

    res.render("user");
})

app.post("/user",async (req, res) => {

    try{
            const useme = new UseTable({
                name:req.body.name,
                email:req.body.email
})

           const usetable = await useme.save();
           res.status(201).render("/user");

    }catch(error){  
        res.status(400).send("Connection not established");
    }

})

//admin login


app.get("/admin",(req, res) => {
    res.render("admin");
})


app.post("/admin",(req, res) =>{
    try{

    }catch(error){
        res.status(400).send("Connection not established");
    }

})


//to login the user 
app.post("/login", async (req, res) => {
        try{
            const email = req.body.email;
            const password = req.body.pass;

            const useremail = await Register.findOne({email:email});    
            const isMatch = bcrypt.compare(password, useremail.password);
            const token = await useremail.generateAuthToken();

            console.log("the token part" + token);


        if(isMatch){
                res.status(201).render("logged");
//                console.log(password);
//                console.log(isMatch);
            }else{
                res.send("Invalid login ID or Password");
            }
        }
        catch (error){
        res.status(400).send("Connection not established");
    }
    
})

//to store the IP address in the DB
// app.post("/logged",async (req, res) => {
//     try{
//         const regiIp = new Ipadd({
//         ipadders : req.body.ipadders,
//         sub : req.body.sub
//     })
//         const ipadd = await regiIp.save();
//         res.status(201).render("index")
//     }catch(error){
//         res.status(400).send(error);
//     }
// })


// to save regions
app.get("/regions", function(req, res) {
    
            Register.find(req.params).then(function(err, register){
        
                if(err)
                {
                    res.status(400).send(err);
                }
               
                //res.json(activity);
                res.render(register);
            })
    })


    // app.get("/regions", async(req, res) => {
    //     try{
    
    //         const kuthe = await Register.findOne(name);
        
    //             Register.findById(req.params.name).then(function(err, register){
            
    //                 if(err)
    //                 {
    //                     res.send(kuthe);
    //                     res.render("regions");
    //                 }
                   
    //                 catch(e)
    //                 {
    //                     res.status(400).send(e);
    //                 }
    
    //             })
    //     })





app.post("/regions",async (req, res) => {
    try{
        const place = new Area({
        regionid : req.body.regionid,
        region : req.body.region,
        postaladdress : req.body.postaladdress,
        notes : req.body.notes,
        version : req.body.version,
        delete : req.body.delete,
        date : start
        
    })
        const area = await place.save();
        res.status(201).render("index")
        console.log(start);
    }catch(error){
        res.status(400).send(error);
    }
})

// to set the security group table details

app.get("/security", (req, res) => {
        res.render("security");
})


app.post("/security", async (req, res) => {
    try{
        const secGT = new Sec({
            sgid : req.body.sgid,
            sgn : req.body.sgn, 
            notes : req.body.notes,
            sdate : start,
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

//to set the application type table

app.get("/apptype",(req, res) => {
    res.render("apptype");
})

app.post("/apptype", async (req, res) => {
    try{
        const appli = new Apps({
                atip : req.body.atid,
                atname : req.body.atname,
                atnote : req.body.atnote,
                date : start,
                delete : req.body.delete
        })
            const apps = await appli.save();
            res.status(201).render("index");
    }catch(error){
        res.status(400).send(error);

    }

})

//to set the application criticality

app.get("/appcrit",(req, res) => {
    res.render("appcrit");

})

app.post("/appcrit",async (req, res) => {
    try{
        const criti = new Crit({
            appcritid : req.body.appcritid,
            appcritname : req.body.appcritname,
            appcritnote : req.body.appcritnote,
            date : start,
            delete : req.body.delete
        })
        const crit = await criti.save();
        res.status(201).render("index");

    }catch(error)
    {
        res.status(400).send(error);
    }

})

//for APMID table

app.get("/apmid",(req, res) =>{
    res.render("apmid");
})


app.post("/apmid", async (req, res) => {
    try{
        const apmid = new Apm({
            apmuuid : req.body.apmuuid,
            apmid : req.body.apmid,
            appname : req.body.appname,
            appnotes : req.body.appnotes,
            date : start,
            delete : req.body.delete

        })        
        const apm = await apmid.save();
        res.status(201).render("index");

    }catch(error){
        res.status(400).send(error);
    }

})

//app owner table

app.get("/appowner",(req, res) => {
        res.render("appowner");

})

app.post("/appowner",async (req, res) => {
        try{
            const own = new AppOwn({
                appownerid : req.body.appownerid,
                appownermail : req.body.appownermail,
                apptelephone : req.body.apptelephone,
                appfname : req.body.appfname,
                applname : req.body.applname,
                appcrit : req.body.appcrit,
                date : start,
                delete : req.body.delete
            })
            const appown = await own.save();
            res.status(201).render("index");

        }catch(error){
            res.status(400).send(error);
        }

})


//users table

app.get("/users", (req, res) => {
    res.render("users");
})

app.post("/users",async (req, res) => {
        try{
            const useit = new Usetable({
                ipamid : req.body.ipamid,
                uname : req.body.uname,
                utype : req.body.utype,
                upri : req.body.upri,
                notes : req.body.notes,
                date : start,
                delete : req.body.delete
            })
            const usetable = await useit.save();
            res.status(201).render("index");

        }catch(error){
            res.status(400).send(error);
        }
})

//to register the users into the DB

app.get("/register",(req,res) => {
    res.render("register");
})

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

// password hashing will happen in between this section 
    console.log("the success part" + registerEmp);
    
    const token = await registerEmp.generateAuthToken();
    console.log("the token part" + token);

    const register = await registerEmp.save();
    res.status(201).render("index")
        }
    }   
    
    catch(error){
        res.status(400).send(error);
    }

})


// const createToken = async() => {
//     const token = await jwt.sign({_id:"610cdae5363d071e58a83a9e"}, "mynameisshreyashjoshiassociateconsultant",{
//     expiresIn:"2 minutes"           
//     });
//     console.log(token);
    
//     const userVer = jwt.verify(token,"mynameisshreyashjoshiassociateconsultant")
//     console.log(userVer);

// }

// createToken();

app.listen(port,() =>{

    console.log(`The server is running on port ${port}`);
})



