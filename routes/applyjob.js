const express = require('express');
const ApplyJob = require('../models/applyjob.js');
const router = express.Router();

router.post("/apply/job",function(req,res){
    const userid = req.body.userid;
    const workid = req.body.workid;
    const application = req.body.application;
    const applyjob = new ApplyJob({
        userid:userid,
        workid:workid,
        application:application,
    });
    applyjob.save()
    .then(function(result){
        res.status(201).json({message : "Applied Job Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

module.exports = router