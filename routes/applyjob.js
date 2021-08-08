const express = require('express');
const ApplyJob = require('../models/applyjob.js');
const router = express.Router();

router.post("/apply/job",function(req,res){
    const userid = req.body.userid;
    const workid = req.body.workid;
    const application = req.body.application;
    const profile = req.body.application;
    const username = req.body.application;
    const address = req.body.application;
    const profession = req.body.application;
    const applyjob = new ApplyJob({
        userid:userid,
        workid:workid,
        application:application,
        profile:profile,
        username:username,
        address:address,
        profession:profession
    });
    applyjob.save()
    .then(function(result){
        res.status(201).json({message : "Applied Job Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.get("/view/single/application/:id",function(req,res){
    const id = req.params.id;
    ApplyJob.find({_id:id}).then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"cannot get"})
    })
});

router.get("/view/application/:id",function(req,res){
    const id = req.params.id;
    ApplyJob.find({workid:id}).then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"cannot get"})
    })
});

module.exports = router