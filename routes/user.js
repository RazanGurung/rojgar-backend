const express = require('express');
const fs = require("fs");
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const router = express.Router();
const upload = require('../middleware/upload');
const { Certificate } = require('crypto');

router.post("/user/register",[
    check("email","Invalid Email Address").isEmail().notEmpty(),
],
    function(req,res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            
           res.status(400).json(errors.array())
        }else{
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const phone = req.body.phone;
            const gender = req.body.gender;
            const usertype = req.body.usertype;
            const password = req.body.password;
            bcrypt.hash(password,10,function(err,hash){
                const user = new User({
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    phone:phone,
                    usertype:usertype,
                    gender:gender,
                    password:hash
                });
                user.save()
                .then(function(result){
                    res.status(201).json({message : "User Registration Successful",success:true})
                })
                .catch(function(err){
                    res.status(500).json({message : err,success:false})
                });
            })
            
        }
});

router.post("/user/login",function (req,res){
    const {email,password} = req.body;
    User.findOne({email : email})
    .then(function (data) {
        if(data == null){
           return res.status(400).json({message : "Invalid email or Password",success:false})
        }
        bcrypt.compare(password,data.password, function(err,result){
            if(result === false){
                return res.status(403).json({message : "Invalid email or Password",success:false})
            }
            const token =  jwt.sign({userid : data._id},'secretkey');
            res.status(200).json({message:"Login Successful",token:token,success:true,data:data});
        })
    }
    )
    .catch(function(err){
        res.status(500).json({message:err,success:false})
    })
});

router.get("/user/account/:id",function(req,res){    
    const id = req.params.id;
    User.findOne({_id:id})
    .then(function(result){
        res.status(200).json({success:true,data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
});

router.put("/general/update/:id",function(req,res){
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const country = req.body.country;
    const city = req.body.city;
    const street = req.body.street;

    var address = {country:country, city:city, street:street}
    User.updateOne({_id:id},
    {   firstname:firstname,
        lastname:lastname,
        phone:phone,
        dob:dob,
        gender:gender,
        $set : {address:address}
    }).then(function(data){
        res.status(200).json({message : "General Information Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
});

router.put("/education/update/:id",function(req,res){
    const id = req.params.id;
    const university = req.body.university;
    const faculty = req.body.faculty;
    const degree = req.body.degree;
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;

    var education = {university:university, faculty:faculty, degree:degree, startdate:startdate, enddate:enddate}
    User.updateOne({_id:id},{
        $set : {education:education}
    }).then(function(data){
        res.status(200).json({message : "Educational Information Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
});

router.put("/language/update/:id",function(req,res){
    const id = req.params.id;
    const planguage = req.body.planguage;
    const slanguage = req.body.slanguage;
    const tlanguage = req.body.tlanguage;
    const pdifficulty = req.body.pdifficulty;
    const sdifficulty = req.body.sdifficulty;
    const tdifficulty = req.body.tdifficulty;

    var language = [{primarylanguage:{language:planguage, difficulty:pdifficulty}, secondarylanguage:{language:slanguage, difficulty:sdifficulty},tertiarylanguage:{language:tlanguage, difficulty:tdifficulty}}]
    User.updateOne({_id:id},{
        $set : {language:language}
    }).then(function(data){
        res.status(200).json({message : "Language Information Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
});

router.put("/description/update/:id",function(req,res){
    const id = req.params.id;
    const jobtitle = req.body.jobtitle;
    const jobdescription = req.body.jobdescription;

    var jdescription = {title:jobtitle, description:jobdescription}
    User.updateOne({_id:id},{
        $set : {job:jdescription}
    }).then(function(data){
        res.status(200).json({message : "Job Description Information Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
});

router.put("/user/update/profile/:id",upload.single('profile'),function(req,res){
    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid file", success:false})
    // }
    const id = req.params.id;
    User.findOne({_id:id}).then(function(data){
        var image = data.profile
        if(image != "noImage.jpg"){
            fs.unlinkSync(image, (err) => { 
                if(err){
                    res.status(400).json({message : "error deleting file", success:false})
                    return
                }
            })
        }
    }) .catch(function(err){
        res.status(400).json({message : "file not found", success:false})
    })
    User.updateOne({_id:id},{profile : req.file.path}).then(function(result){
        res.status(200).json({message:"Profile update successfully",success:true})
    }).catch(function(err){
        res.status(500).json({message:"Failed to Update Profile Picture", success : false})
    })
})

router.put("/user/update/certificate/:id",upload.single('certificateimg'),function(req,res){
    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid file", success:false})
    // }
    const id = req.params.id;
    User.findOne({_id:id}).then(function(data){
        var image = data.certificates.certificateimg
        if(image != "noImage.jpg"){
            fs.unlinkSync(image, (err) => { 
                if(err){
                    res.status(400).json({message : "error deleting file", success:false})
                    return
                }
            })
        }
    }) .catch(function(err){
        res.status(400).json({message : "file not found", success:false})
    })
    const title = req.body.title;
    const data = {certificateimg:req.file.path,title:title}
    User.updateOne({_id:id},{$set : {certificates : data}}).then(function(result){
        res.status(200).json({message:"Profile update successfully",success:true})
    }).catch(function(err){
        res.status(500).json({message:"Failed to Update Profile Picture", success : false})
    })
})

module.exports = router