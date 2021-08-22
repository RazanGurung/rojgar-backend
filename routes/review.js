const express = require('express');
const Review = require('../models/review');
const router = express.Router();

router.post("/review/professional/:id", function(req,res){
    const id = req.params.id;
    const userid = req.body.userid;
    const workid = req.body.workid;
    const username = req.body.username;
    const profile = req.body.profile;
    const rating = req.body.rating;
    const review = req.body.review;
    const reviewPost = new Review({
        professionalid:id,
        userid : userid,
        workid : workid,
        username:username,
        profile:profile,
        rating:rating,
        review:review
    });
    reviewPost.save()
    .then(function(result){
        res.status(201).json({message : "Reviewed Successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message : err,success:false})
    });
});

router.put('/review/update/:id',function(req,res){
    const id = req.params.id;
    const review = req.body.review;
    Review.updateOne({_id:id},{
        review:review
    }).then(function(data){
        res.status(200).json({message : "Review Updated",success:true})
    }).catch(function(err){
        res.status(500).json({message : err,success:false})
    })
})

router.get('/review/:id',function(req,res){
    const id = req.params.id;
    Review.find({workid:id}).then(data =>{
        res.status(200).json({data:data});
    }).catch(err=>{
        res.status(500).json({message:err});
    })
})

router.delete('/delete/review/:id',function(req,res){
    const id = req.params.id;
    Review.deleteOne({_id:id}).then(data=>{
        res.status(200).json({message:"deleted Successfully"})
    }).catch(err=>{
        res.status(500).json({message:"error deleting"})
    })
})

module.exports = router