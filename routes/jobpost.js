const express = require('express');
const JobPost = require('../models/jobpost');
const router = express.Router();

router.post("/job/post/:id",function(req,res){
    const id = req.params.id;
    const worktitle = req.body.worktitle;
    const worktype = req.body.worktype;
    const proficiency = req.body.proficiency;
    const workdescription = req.body.workdescription;
    const jobpost = new JobPost({
        userid:id,
        worktitle:worktitle,
        worktype:worktype,
        proficiency:proficiency,
        workdescription:workdescription,
    });
    jobpost.save()
    .then(function(result){
        res.status(201).json({message : "Posted Job Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.get("/all/job/post",function(req,res){    
    JobPost.find()
    .then(function(result){
        res.status(200).json({success:true,data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
});

router.get("/user/job/post/:id",function(req,res){    
    const id = req.params.id;
    JobPost.find({userid:id})
    .then(function(result){
        res.status(200).json({success:true,data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
});

router.get("/single/job/post/:id",function(req,res){    
    const id = req.params.id;
    JobPost.findOne({_id:id})
    .then(function(result){
        res.status(200).json({success:true,data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
});

router.put("/post/update/:id",function(req,res){
    const id = req.params.id;
    const worktitle = req.body.worktitle;
    const worktype = req.body.worktype;
    const proficiency = req.body.proficiency;
    const workdescription = req.body.workdescription;
    JobPost.updateOne({_id:id},
    {   worktitle:worktitle,
        worktype:worktype,
        proficiency:proficiency,
        workdescription:workdescription
    }).then(function(data){
        res.status(200).json({message : "Job Post Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
});

router.delete("/post/delete/:id",function(req,res){
    const id = req.params.id;

    JobPost.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({message : "Post Deleted Successfully",success:true})
    })
    .catch(function(err){
        res.status(400).json({message : "Post deleting account", success:false})
    })  

});

module.exports = router