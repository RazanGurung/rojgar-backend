const mongoose = require('mongoose');
const { stringify } = require('querystring');
const JobPost = mongoose.model('JobPost',{
    userid:{
        type:String
    },
    worktitle : {
        type : String,
        reduired : true
    },
    worktype : {
        type : String,
        reduired : true
    },
    proficiency : {
        type : String,
        reduired : true,
    },
    workdescription: {
        type : String,
        reduired : true,
    },
    status : {
        type : String,
        default : "ongoing"
    }
});
module.exports = JobPost; 