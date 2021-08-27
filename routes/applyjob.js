const express = require('express');
const ApplyJob = require('../models/applyjob.js');
const router = express.Router();

router.post("/apply/job",function(req,res){
    const userid = req.body.userid;
    const workid = req.body.workid;
    const application = req.body.application;
    const profile = req.body.profile;
    const username = req.body.username;
    const address = req.body.address;
    const profession = req.body.profession;
    const worktitle = req.body.worktitle;
    const applyjob = new ApplyJob({
        userid:userid,
        workid:workid,
        application:application,
        profile:profile,
        username:username,
        address:address,
        profession:profession,
        worktitle:worktitle
    });
    applyjob.save()
    .then(function(result){
        res.status(201).json({message : "Applied Job Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.get("/all/application",function(req,res){
    ApplyJob.find().then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"cannot get"})
    })
});

router.get("/view/application/:id",function(req,res){
    const id = req.params.id;
    ApplyJob.find({status: {$not:{$eq:"false"}},workid:id}).then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"cannot get"})
    })
});

router.get("/my/application/:id",function(req,res){
    const id = req.params.id;
    ApplyJob.find({userid:id}).then(data=>{
        res.status(200).json({data:data})
    }).catch(err=>{
        res.status(500).json({message:"cannot get"})
    })
});

router.put("/applicaiton/status/:id",function(req,res){
    const id = req.params.id;
    const status = req.body.status;
    ApplyJob.findOneAndUpdate({_id:id},{status:status})
    .then(function(result){
        res.status(200).json({message:"successful"});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.put("/applicaiton/proposal/:id",function(req,res){
    const id = req.params.id;
    const application = req.body.application;
    ApplyJob.findOneAndUpdate({_id:id},{application:application})
    .then(function(result){
        res.status(200).json({message:"successful"});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.delete("/application/delete/:id",function(req,res){
    const id = req.params.id;
    ApplyJob.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({message : "Application Deleted Successfully",success:true})
    })
    .catch(function(err){
        res.status(400).json({message : "Application deleting account", success:false})
    })  
});

module.exports = router