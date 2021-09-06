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
            type : String,
            default:""
        },
        city : {
            type : String,
            default:""
        },
        street : {
            type : String,
            default:""
        }
    },
    payrate:{
        type : String,
        default:""
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
        format: '%Y-%m-%d',
        default:""
    },
    education:{
        university:{
            type : String,
            default:""
        },
        faculty:{
            type : String,
            default:""
        },
        degree:{
            type : String,
            default:""
        },
        startdate:{
            type:Date,
            format: '%Y-%m-%d',
            default:""
        },
        enddate:{
            type:Date,
            format: '%Y-%m-%d',
            default:""
        }
    },
    job:{
        title:{
            type : String,
            default:""
        },
        description:{
            type : String,
            default:""
        }
    },
    language:{
        primarylanguage:{
            language:{
                type:String,
                default:""
            },
            difficulty:{
                type:String,
                default:""
            }
        },
        secondarylanguage:{
            language:{
                type:String,
                default:""
            },
            difficulty:{
                type:String,
                default:""
            }
        },
        tertiarylanguage:{
            language:{
                type:String,
                default:""
            },
            difficulty:{
                type:String,
                default:""
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