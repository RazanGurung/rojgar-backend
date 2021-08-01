const express = require('express');
const ApplyJob = require('../models/applyjob.js');
const router = express.Router();

router.post("/apply/job", function(req,res){
    const userid = req.body.userid;
    const workid = req.body.workid;
    const application = req.body.application;

    const applyjob = new ApplyJob({
        userid:userid,
        workid:workid,
        application:application
    })
    applyjob.save().then(data=>{
        res.status(200).json({message:"job Application Successful"})
    }).catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router