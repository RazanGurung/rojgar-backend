const express = require('express');
const Bookmark = require('../models/bookmark');
const router = express.Router();

router.post("/bookmark/post/:id",function(req,res){
    const id = req.params.id;
    const worktitle = req.body.worktitle;
    const worktype = req.body.worktype;
    const proficiency = req.body.proficiency;
    const workdescription = req.body.workdescription;
    const esttime = req.body.esttime;
    const paytype = req.body.paytype;
    const bookmark = new Bookmark({
        userid:id,
        worktitle:worktitle,
        worktype:worktype,
        proficiency:proficiency,
        workdescription:workdescription,
        esttime:esttime,
        paytype:paytype,
    });
    bookmark.save()
    .then(function(result){
        res.status(201).json({message : " Job Bookmarked Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
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