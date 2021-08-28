const mongoose = require('mongoose');
const { stringify } = require('querystring');
const User = mongoose.model('User',{
    firstname: {
        type : String,
        reduired : true
    },
    lastname: {
        type : String,
        reduired : true
    },
    email: {
        type : String,
        reduired : true,
        unique: true
    },
    phone: {
        type : Number,
        reduired : true,
        unique: true
    },
    address:{
        country:{
            type : String
        },
        city : {
            type : String
        },
        street : {
            type : String
        }
    },
    payrate:{
        type : String
    },
    gender:{
        type : String,
        reduired : true,
        enum:["male","female","others"]
    },
    password:{
        type : String,
        reduired : true
    },
    profile : {
        type : String,
        default : "noImage.jpg"
    },
    usertype : {
        type : String,
        default : "user",
        enum:["user","professional"]
    },
    verified:{
        type:Boolean,
        default:false
    },
    dob:{
        type:Date,
        format: '%Y-%m-%d'
    },
    education:{
        university:{
            type : String
        },
        faculty:{
            type : String
        },
        degree:{
            type : String
        },
        startdate:{
            type:Date,
            format: '%Y-%m-%d'
        },
        enddate:{
            type:Date,
            format: '%Y-%m-%d'
        }
    },
    job:{
        title:{
            type : String
        },
        description:{
            type : String
        }
    },
    language:{
        primarylanguage:{
            language:{
                type:String
            },
            difficulty:{
                type:String
            }
        },
        secondarylanguage:{
            language:{
                type:String
            },
            difficulty:{
                type:String
            }
        },
        tertiarylanguage:{
            language:{
                type:String
            },
            difficulty:{
                type:String
            }
        }
    },
    confirmation:{
        type:String,
        required:true
    },
    emailverified:{
        type:Boolean,
        default:false
    }
});
module.exports = User; 