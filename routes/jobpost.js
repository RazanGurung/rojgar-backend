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

module.exports = router