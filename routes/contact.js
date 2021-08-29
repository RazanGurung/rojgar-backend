const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

router.post("/contact/us",function(req,res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const contact = new Contact({
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        message:message,
    });
    contact.save()
    .then(function(result){
        res.status(201).json({message : " contact Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.get("/contact/view",function(req,res){
    Contact.find().then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"Counldn't find any data."})
    })
})
module.exports = router