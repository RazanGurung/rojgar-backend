const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Contact = mongoose.model('Contact',{
    firstname: {
        type : String,
        reduired : true,
    },
    lastname:{
        type : String,
        reduired : true
    },
    phone: {
        type : String,
        reduired : true,
    },
    email: {
        type : String,
        reduired : true,
    },
    message:{
        type : String,
        reduired : true
    }
});
module.exports = Contact; 