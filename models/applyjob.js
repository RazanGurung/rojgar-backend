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
    }
});
module.exports = JobApply; 