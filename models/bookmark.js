const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Bookmark = mongoose.model('Bookmark',{
    userid:{
        type:String
    },
    worktitle : {
        type : String,
        reduired : true
    },
    workid:{
        type:String,
        reduired : true
    },
    proficiency : {
        type : String,
        reduired : true,
    },
    esttime : {
        type : String,
        reduired : true,
    },
    paytype: {
        type : String,
        reduired : true,
    }
});
module.exports = Bookmark; 