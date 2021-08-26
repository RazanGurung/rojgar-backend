const express = require('express');
const JobRequest = require('../models/jobrequest');
const router = express.Router();

router.post("/job/request/:id",function(req,res){
    const id = req.params.id;
    const professionalid = req.body.professionalid;
    const worktitle = req.body.worktitle;
    const username = req.body.username;
    const profile = req.body.profile;
    const workdescription = req.body.workdescription;
    const paytype = req.body.paytype;
    const jobrequest = new JobRequest({
        userid:id,
        professionalid:professionalid,
        username:username,
        profile:profile,
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
    JobRequest.find({status: {$not:{$eq:"false"}},professionalid:id})
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

router.put("/update/status/:id",function(req,res){
    const id = req.params.id;
    const status = req.body.status;
    JobRequest.findOneAndUpdate({_id:id},{status:status})
    .then(function(result){
        console.log(status)
        res.status(200).json({message:"successful"});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.put("/update/request/:id",function(req,res){
    const id = req.params.id;
    const worktitle = req.body.worktitle;
    const workdescription = req.body.workdescription;
    const paytype = req.body.paytype;
    JobRequest.updateOne({_id:id},{
        worktitle:worktitle,
        workdescription:workdescription,
        paytype:paytype,
    })
    .then(function(result){
        res.status(200).json({message:"successful"});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
})

router.delete("/delete/request/:id",function(req,res){
    const id = req.params.id;
    JobRequest.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({message : "Request Deleted Successfully",success:true})
    })
    .catch(function(err){
        res.status(400).json({message : "Request deleting account", success:false})
    })  

});


module.exports = router