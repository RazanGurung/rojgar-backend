const express = require('express');
const JobRequest = require('../models/jobrequest');
const router = express.Router();

router.post("/job/request/:id",function(req,res){
    const id = req.params.id;
    const professionalid = req.body.professionalid;
    const worktitle = req.body.worktitle;
    const workdescription = req.body.workdescription;
    const paytype = req.body.paytype;
    const jobrequest = new JobRequest({
        userid:id,
        professionalid:professionalid,
        worktitle:worktitle,
        workdescription:workdescription,
        paytype:paytype,
    });
    jobrequest.save()
    .then(function(result){
        res.status(201).json({message : "Requested Job Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.get("/job/invite/:id",function(req,res){
    const id = req.params.id;
    JobRequest.find({professionalid:id})
    .then(function(result){
        res.status(200).json({data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.get("/requested/professional/:id",function(req,res){
    const id = req.params.id;
    JobRequest.find({userid:id})
    .then(function(result){
        res.status(200).json({data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.get("/delete/request/:id",function(req,res){
    const id = req.params.id;
    JobRequest.deleteOne({_id:id}).then(res=>{
        res.status(200).json({message:"Deleted Successfully"});
    }).catch(err=>{
        res.status(500).json({message:"error deleting request"})
    })
})


module.exports = router