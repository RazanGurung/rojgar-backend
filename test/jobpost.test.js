const JobPost = require("../models/jobpost");
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
describe('JobPost Schema Test', () =>{
    it('Add JobPost', () =>{
        const jobpost = {
            "userid":"sjfdsjdfas;gfas",
            "worktitle":"test",
            "worktype":"testing",
            "proficiency":"tester",
            "workdescription":"testing is my job",
            "esttime":"2 hrs",
            "paytype":"fixed",
        } 
        return JobPost.create(jobpost)
            .then((pro_ret) => {
                expect(pro_ret.worktitle).toEqual('test');
        });
    });
});
describe('JobPost Schema Test', () =>{
    it('Update JobPost', async () =>{
        return JobPost.findOneAndUpdate({
            _id:Object('613637991305c41ca4e66f6c')
        },{$set : {worktitle:'test123'}})
           .then((jobpost)=>{
            expect(jobpost.worktitle).toEqual('test123')
        })
    })
});
describe('JobPost Schema Test', () =>{
    it('JobPost Delete', async()=>{
        const status = await JobPost.deleteOne({_id:'6136324c5a141934ec9ddc95'});
        expect(status.ok).toBe(1);
    })
});