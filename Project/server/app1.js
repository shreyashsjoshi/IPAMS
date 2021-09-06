//updated 05:16pm 06-09-21

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
const Jaaga = require("./models/place");
const Sec = require("./models/security");
const Apps = require("./models/application");
const Crit = require("./models/applicationcrit");
const Apm = require("./models/apmid");
const AppOwn = require("./models/appowner");
const Usetable = require("./models/usertable");
const Appwhich = require("./models/apptable");
const Central = require("./models/central");

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

//home url
app.get("/",(req,res) => {
    res.render("index");
});

//fetch data
app.get("/all", (req, res) =>{
    res.send([1,2,3]);
})
app.get("/all/:id",async (req,res) => {
    res.send(req.params.id);
    try{
    const user1 = await Usetable.find({});
 
    const user2 = await Jaaga.find({});
 
    const user3 = await Sec.find({});
    res.send(user1).send(user2);
    res.send(user3); 

}
catch(e){
    res.status(400).send("Connection not established");
}
})

//central db

app.get("/enter",async (req, res) => {
    try{
    const user100 =  await Central.find({});
    res.send(user100);
    }
    catch(err){
        res.status(400).send("Connection not established");
    }
})

app.post("/enter",async(req, res) =>{

    try{
        const middle = new Central({
            ipam : req.body.ipam,
            region : req.body.region,
            ipad : req.body.ipad,
            subnet : req.body.subnet,
            gateway : req.body.gateway,
            vlanID : req.body.vlanID,
            date : start,
            requestID : req.body.requestID,
            assigndby : req.body.assigndby,
            vmname : req.body.vmname,
            dept : req.body.dept,
            secgrp : req.body.secgrp,
            appname : req.body.appname,
            apptype : req.body.apptype,
            appown : req.body.appown,
            appmail : req.body.appmail,
            comments : req.body.comments,
            faceapp : req.body.faceapp,
            aapm : req.body.aapm
})

       const central = await middle.save();
       console.log("Data Saved");
       res.status(201).render("first");

}catch(error){  
    res.status(400).send("Connection not established");
}


})

// to the user login
app.get("/login",(req,res) => {
    res.render("login");

})

//post login user details
app.get("/user",async (req, res) => {
    res.render("user");
    try{
        const user1 = await Usetable.find({});
        res.send(user1); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }

})

app.post("/user",async (req, res) => {

    try{
            const useme = new Usetable({
                uname:req.body.uname,
                email:req.body.email
})

           const usetable = await useme.save();
           res.status(201).render("first");

    }catch(error){  
        res.status(400).send("Connection not established");
    }

})

//first page post user details
app.get("/first",async (req,res) => {
    res.render("first");
    try{
        const user2 = await Jaaga.find({});
        res.send(user2); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }

})

app.post("/first",async (req, res) => {

    try
    {
            const field = new Jaaga({
                city : req.body.city,
                postaladdress : req.body.postaladdress,
                noteregion : req.body.noteregion
            })

           const jaaga = await field.save();
           res.status(201).render("second");

    }catch(error){  
        res.status(400).send("Connection not established");
    }

})

//second

app.get("/second",async (req, res) => {
    res.render("second");
    try{
        const user3 = await Sec.find({});
        res.send(user3); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }
})


app.post("/second", async (req, res) => {
try{
    const secGT = new Sec({
        ipadrs : req.body.ipadrs,
        sgn : req.body.sgn, 
        sgnote : req.body.sgnote,
        sdate : start,
    })

        const sec = await secGT.save();
        res.status(201).render("third")
}catch(error){
    res.status(400).send(error);

}

})

//third

app.get("/third",async (req,res) => {

    res.render("third");
    try{
        const user4 = await Apps.find({});
        res.send(user4); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }
})


app.post("/third",async (req,res) =>{
    try{
        const appt = new Apps
        ({
        atname : req.body.atname,
        atnote : req.body.atnote,
        date : start
        })
        
        const apps = await appt.save();
        res.status(201).render("fourth")
    }
    catch(err){
        res.status(400).send("connection not established");
    }

})

//fourth
app.get("/fourth",async (req,res) => {
    res.render("fourth");
    try{
        const user5 = await Appwhich.find({});
        res.send(user5); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }
})

app.post("/fourth",async (req,res) => {
    try
    {
        const appw = new Appwhich({

            appnm : req.body.appnm, 
            appnoteds : req.body.appnoteds,
            date : start
        }) 

        const appwhich = await appw.save();
        res.status(201).render("fifth");
    }
    catch(err){
        res.status(400).send("Connection not established");
    }

})

//fifth

app.get("/fifth",async (req, res) => {
    res.render("fifth");
    try{
        const user6 = await Crit.find({});
        res.send(user6); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }
})

app.post("/fifth",async (req, res) => {
    try{
        const criti = new Crit({

            appcritname : req.body.appcritname,
            appcritnote : req.body.appcritnote,
            date : start
        })
        const crit = await criti.save();
        res.status(201).render("sixth");

    }catch(error)
    {
        res.status(400).send(error);
    }

})

//sixth
app.get("/sixth",async (req,res) => {
    res.render("sixth");
    try{
        const user7 = await AppOwn.find({});
        res.send(user7); 
        }
        catch(e){
            res.status(400).send("Connection not established");
        }
})

app.post("/sixth", async (req, res) => {
    try{
        const own = new AppOwn({
            appownermail : req.body.appownermail,
            apponame : req.body.apponame,
            apptelephone : req.body.apptelephone,
            appnote : req.body.appnote,
            date : start
        })
        const appown = await own.save();
        res.status(201).render("seventh");
    }
    catch(err){
        res.status(400).send("Connection not established");
    }

})

//seventh

app.get("/seventh",async (req,res) => {
    res.render("seventh");
    try{
    const user8 = await Apm.find({});
    res.send(user8); 
    }
    catch(e){
        res.status(400).send("Connection not established");
    }
})

app.post("/seventh", async (req, res) => {
    try{
        const apmid = new Apm({

            apmid : req.body.apmid,
//ask shekhar            appname : req.body.appname,
            appnotes : req.body.apmnote,
            date : start
        })        
        const apm = await apmid.save();
        res.status(201).render("index");

    }catch(error){
        res.status(400).send(error);
    }

})



//to check login credentials
app.get("/logged",async (req,res) => {
    const gettit = await Message.aggregate([
        {$match:{}}
    ])

    res.render("logged");
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
            res.status(201).render("first");
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

//server
app.listen(port,() =>{

    console.log(`The server is running on port ${port}`);
})



