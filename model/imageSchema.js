const mongoose = require('mongoose');

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

const imageCategory = new mongoose.model("imageCategory",imageSchema);

module.exports = imageCategory;
