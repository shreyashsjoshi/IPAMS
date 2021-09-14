const express = require("express");
const app = express();


const port = process.env.PORT   ||  1000;




app.get('/', (req, res) => {

    res.send("<h1>Hello, the connection is working</h1>");
    });


app.listen(port,() =>{
    console.log(`The server is running on port ${port}`);
})

