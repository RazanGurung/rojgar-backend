const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Review = mongoose.model('Review',{
    professionalid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    review:{
        type : String,
        required:true
    },
    rating:{
        type:Number
    }
});
module.exports = Review; 