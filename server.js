const express = require('express');
const mongoose = require('mongoose');
const dotevn = require("dotenv");

const admin = require('./routes/admin');
const discover = require('./routes/discover');
const qpm = require('query-params-mongo');
dotevn.config();

const app = express();
dotevn.config({path:'./.env'});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



require('./config/db.js');



app.get('/api/health',(req,res)=>{
    res.send(`Backend server is active status:active & time:${new Date()})`);
});

app.use("/api/admin",admin);
 
app.use("/api/discover",discover);
 






app.use((req,res,next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);

});

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error :{
            status: err.status|| 500, 
            message: err.message
        }
    })

})

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,()=>{
    console.log("Server is up and running");
});