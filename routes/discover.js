const { Router, response } = require("express");

const route = Router();

const category = require('../model/categorySchema');

route.get('/',(req,res)=>{

});


route.get('/listCategory',(req,res)=>{
    const getCategory = category.find({},function(err,getCategory){
        res.send(getCategory);
    });
    
   
});

module.exports = route;