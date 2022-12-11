const { Router, response } = require("express");

const route = Router();

const category = require('../model/categorySchema');
const imageCategory = require("../model/imageSchema");


route.get('/',(req,res)=>{
    const getImage = imageCategory.find({category:"nature"},function(err,getImage){
        res.send(getImage);
    }).limit(4);
});


route.get('/listCategory',(req,res)=>{
    const getCategory = category.find({},function(err,getCategory){
        res.send(getCategory);
    });
    
   
});

module.exports = route;