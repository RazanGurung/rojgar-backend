const mongoose = require('mongoose');
const { stringify } = require('querystring');
const JobApply = mongoose.model('JobApply',{
    userid:{
        type:String,
        required:true
    },
    workid:{
        type:String,
        required:true
    },
    application:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    username:{
        type : String,
        required:true
    },
    address:{
        type : String,
        required:true
    },
    profession:{
        type : String,
        required:true
    }
});
module.exports = JobApply; 