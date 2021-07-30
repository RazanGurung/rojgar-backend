const express = require('express');
const JobPost = require('../models/jobpost');
const User = require('../models/user');
const router = express.Router();

router.get("/search/professional", function(req,res,next){
    const search = req.query.search;
    User.find({
        usertype: {$not:{$eq:"user"}},
        $or: [
            { firstname: { '$regex': search, '$options': 'i' } },
            { lastname: { '$regex': search, '$options': 'i' } },
            { "job.title" : { '$regex' : search, '$options' : 'i'}}
        ], 
    }).then(data=>{
        res.status(200).json({data:data});
    }).catch(err=>{
        res.status(500).json({message:err});
    })
});

router.get('/search/work',function(req,res,next){
    const search = req.query.search;
    JobPost.find({
        $or : [
            { worktitle: { '$regex': search, '$options': 'i' } },
            { worktype: { '$regex': search, '$options': 'i' } },
            { workdescription: { '$regex': search, '$options': 'i' } }
        ]
    }).then(data =>{
        res.status(200).json({data:data});
    }).catch(err=>{
        res.status(500).json({message:err});
    })
})

module.exports = router