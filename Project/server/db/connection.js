const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/IPAM",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() => {
        console.log("The connection to the DB is established");
}).catch(()=>{
        console.log("Connection failed");
})



