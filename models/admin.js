const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Admin = mongoose.model('Admin',{
    email: {
        type : String,
        reduired : true,
        unique: true
    },
    password:{
        type : String,
        reduired : true
    },
    usertype : {
        type : String,
        default : "admin",
    }
});
module.exports = Admin; 