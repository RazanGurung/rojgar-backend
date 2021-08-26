const express = require('express');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/admin/register",function(req,res){
    const email = req.body.email;
    const usertype = req.body.usertype;
    const password = req.body.password;
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password,salt,function(err,hash){
            const admin = new Admin({
                email:email,
                usertype:usertype,
                password:hash
            });
            admin.save()
            .then(function(result){
                res.status(201).json({message : "Admin Registration Successful",success:true})
            })
            .catch(function(err){
                res.status(500).json({message : err,success:false})
            });
        })
    })
});

router.post("/admin/login",function (req,res){
    const {email,password} = req.body;
    Admin.findOne({email : email})
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

module.exports = router