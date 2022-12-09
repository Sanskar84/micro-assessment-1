const express = require('express');
const mongoose = require('mongoose');
const dotevn = require("dotenv");

dotevn.config();

const app = express();
dotevn.config({path:'./.env'});
app.use(express.json());
app.use(express.urlencoded());

require('./config/db.js'); 

const categorySchema = new mongoose.Schema({
    name:{type:String, required: true},

},
{
    timestamps:true
});

const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:[{
        type: String
    }],
    likes:{
        type:Number
    },
    imageLink:{
        type:String,
        required:true,
    }
    },
    {
        timestamps:true
});






app.get('/api/health',(req,res)=>{
    res.send(`Backend server is active status:active & time:${new Date()})`);
});







const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,()=>{
    console.log("Server is up and running");
});