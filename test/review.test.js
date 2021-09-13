const Review= require("../models/review");
const mongoose = require("mongoose");

const url ='mongodb://127.0.0.1:27017/rojgar';
beforeAll(async () =>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex : true
    });
});

afterAll(async () =>{
    await mongoose.connection.close();
});

describe('Review Schema Test', () =>{
    it('Add Review', () =>{
        const review = {
            'professionalid':'dfafsdaf',
            'userid' : 'sfdsafsf',
            'workid' : 'dfsfsadfafa',
            'username':'test',
            'profile':'test profile',
            'rating':'5',
            'review':'test review'
            } 
        return Review.create(review)
            .then((pro_ret) => {
                expect(pro_ret.rating).toEqual('5');
        });
    });
});
describe('Review Schema Test', () =>{
    it('Update Review', async () =>{
        return Review.findOneAndUpdate({
            _id:Object('613658708831e002b0c57d70')
        },{$set : {rating:'2'}})
           .then((review)=>{
            expect(review.rating).toEqual('2')
        })
    })
});
describe('Review Schema Test', () =>{
    it('Review Delete', async()=>{
        const status = await Review.deleteOne({_id:'613658708831e002b0c57d70'});
        expect(status.ok).toBe(1);
    })
});