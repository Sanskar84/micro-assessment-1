const { Router } = require("express");
const route = Router();


const category = require('../model/categorySchema');
const imageCategory = require('../model/imageSchema');

route.get("/",(req,res)=>{
    res.send("hello from admin route");
});

route.post("/addCategory",(req,res)=>{
   const name = req.body.name;

   const newCategory = new category({
        name: req.body.name
   })
   newCategory.save();
   res.send("Category added succesfully");
});

route.post('/addImage',(req,res)=>{
    const {name , category,likes,imageLink} = req.body;

    const newImage = new imageCategory({name, category, likes, imageLink});
    newImage.save();
    res.send("Image added succesfully");

});


module.exports = route;