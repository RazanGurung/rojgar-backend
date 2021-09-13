const JobRequest= require("../models/jobrequest");
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

describe('JobRequest Schema Test', () =>{
    it('Add JobRequest', () =>{
        const jobrequest = {
            'userid':"askjhdfklas",
            'professionalid':"sdhfkjadsfa",
            'username':"test",
            'profile':"test profile",
            'worktitle':"test title",
            'workdescription':"test description",
            'paytype':"fixed",
            } 
        return JobRequest.create(jobrequest)
            .then((pro_ret) => {
                expect(pro_ret.worktitle).toEqual('test title');
        });
    });
});
describe('JobRequest Schema Test', () =>{
    it('Update JobRequest', async () =>{
        return JobRequest.findOneAndUpdate({
            _id:Object('61365379325d9b050c99ab56')
        },{$set : {worktitle:'test work title'}})
           .then((jobrequest)=>{
            expect(jobrequest.worktitle).toEqual('test work title')
        })
    })
});
describe('JobRequest Schema Test', () =>{
    it('JobRequest Delete', async()=>{
        const status = await JobRequest.deleteOne({_id:'61365379325d9b050c99ab56'});
        expect(status.ok).toBe(1);
    })
});