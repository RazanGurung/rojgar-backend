const express = require('express');
const Bookmark = require('../models/bookmark');
const router = express.Router();

router.post("/bookmark/post/:id",function(req,res){
    const id = req.params.id;
    const worktitle = req.body.worktitle;
    const workid = req.body.workid;
    const proficiency = req.body.proficiency;
    const esttime = req.body.esttime;
    const paytype = req.body.paytype;
    const bookmark = new Bookmark({
        userid:id,
        workid:workid,
        worktitle:worktitle,
        proficiency:proficiency,
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

router.get("/user/bookmark/post/:id",function(req,res){    
    const id = req.params.id;
    Bookmark.find({userid:id})
    .then(function(result){
        res.status(200).json({success:true,data:result});
    })
    .catch(function(err){
        res.status(401).json({message : err,success:false})
    })
});

router.delete("/bookmark/delete/:id",function(req,res){
    const id = req.params.id;
    Bookmark.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({message : "Bookmark Deleted Successfully",success:true})
    })
    .catch(function(err){
        res.status(400).json({message : "Bookmark deleting account", success:false})
    })  
});

module.exports = router