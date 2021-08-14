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
            default:"country"
        },
        city : {
            type : String,
            default:"city"
        },
        street : {
            type : String,
            default:"street"
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
            type : String,
            default:"university or college"
        },
        faculty:{
            type : String,
            default:"faculty or field"
        },
        degree:{
            type : String,
            default:"degree or certificate"
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
    language:{
        primarylanguage:{
            language:{
                type:String,
                default:"language"
            },
            difficulty:{
                type:String,
                default:"proficiency"
            }
        },
        secondarylanguage:{
            language:{
                type:String,
                default:"language"
            },
            difficulty:{
                type:String,
                default:"proficiency"
            }
        },
        tertiarylanguage:{
            language:{
                type:String,
                default:"language"
            },
            difficulty:{
                type:String,
                default:"proficiency"
            }
        }
    },
    job:{
        title:{
            type : String,
            default : "Add Job Title"
        },
        description:{
            type : String,
            default : "Add Job Description"
        }
    },
    certificates:{
        certificateimg:{
            type : String,
            default:"noImage.jpg"
        },
        title : {
            type : String
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