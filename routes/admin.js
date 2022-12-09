const { Router } = require("express");
const route = Router();


const category = require('../model/categorySchema');


route.get("/",(req,res)=>{
    res.send("hello from admin route");
});

route.post("/addCategory",(req,res)=>{
   const name = req.body.name;

   const newCategory = new category({
        name: req.body.name
   })
   newCategory.save();
})


module.exports = route;