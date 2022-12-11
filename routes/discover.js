const mongodb = require('mongodb');
const { Router, response } = require("express");

const route = Router();

const category = require('../model/categorySchema');
const imageCategory = require("../model/imageSchema");


route.get('/',(req,res)=>{
    const getImage = imageCategory.find({category:"nature"},function(err,getImage){
        res.send(getImage);
    }).limit(4);
});


route.get('/:categoryName',(req,res)=>{
    const requestedCategory = req.params.categoryName;

   console.log(req.query);
  


const sort = {};

if(req.query.sortByDate){
    sort['createdAt'] = req.query.sortByDate === 'asc'?-1:1
}
if(req.query.sortByLike){
    sort["likes"] = req.query.sortByLike ==='true'?1:-1
}
   console.log(sort);
    const getimg = imageCategory.find({category:requestedCategory},function(err,getimg){
        res.send(getimg);
    }).sort(sort).limit(4);
    
})


route.get('/listCategory',(req,res)=>{
    const getCategory = category.find({},function(err,getCategory){
        res.send(getCategory);
    });
    
   
});

module.exports = route;