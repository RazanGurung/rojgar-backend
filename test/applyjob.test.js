const ApplyJob = require("../models/applyjob");
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

describe('ApplyJob Schema Test', () =>{
    it('Add ApplyJob', () =>{
        const applyjob = {
            'userid':"dsfasdfsaf",
            'workid':"sdfsfaf",
            'application':"this is test application",
            'profile':"testprofile",
            'username':"test",
            'address':"test address",
            'profession':"test profession",
            'worktitle':"test title"
        } 
        return ApplyJob.create(applyjob)
            .then((pro_ret) => {
                expect(pro_ret.application).toEqual('this is test application');
        });
    });
});
describe('ApplyJob Schema Test', () =>{
    it('Update ApplyJob', async () =>{
        return ApplyJob.findOneAndUpdate({
            _id:Object('6136489bdeec3423642f199e')
        },{$set : {application:'test application'}})
           .then((applyjob)=>{
            expect(applyjob.application).toEqual('this is test application')
        })
    })
});
describe('ApplyJob Schema Test', () =>{
    it('ApplyJob Delete', async()=>{
        const status = await ApplyJob.deleteOne({_id:'6136489bdeec3423642f199e'});
        expect(status.ok).toBe(1);
    })
});