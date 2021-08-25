const mongoose = require('mongoose');
const { stringify } = require('querystring');
const JobRequest = mongoose.model('JobRequest',{
    userid:{
        type:String
    },
    professionalid:{
        type:String
    },
    username:{
        type:String,
        required : true
    },
    profile:{
        type:String,
        required : true
    },
    worktitle : {
        type : String,
        reduired : true
    },
    workdescription: {
        type : String,
        reduired : true,
    },
    paytype: {
        type : String,
        reduired : true,
    },
    status : {
        type : String,
        default : "ongoing"
    }
});
module.exports = JobRequest; 