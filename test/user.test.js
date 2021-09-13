const User = require("../models/user");
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
describe('User Schema Test', () =>{
    it('Add User', () =>{
        const user = {
            'firstname':"test",
            'lastname':"test",
            'email':'testsdfgsvd@gmail.com',
            "usertype":"user",
            "gender":"male",
            'phone':9812345678,
            'password':'test123',
            'confirmation':"dsgfias;gigwe9grwwaesfhioarshdfouags"
        } 
        return User.create(user)
            .then((pro_ret) => {
                expect(pro_ret.firstname).toEqual('test');
        });
    });
});
describe('User Schema Test', () =>{
    it('Update User', async () =>{
        return User.findOneAndUpdate({
            _id:Object('6135dbcb0fccf43054cb8468')
        },{$set : {firstname:'test'}})
           .then((user)=>{
            expect(user.firstname).toEqual('test')
        })
    })
});
describe('User Schema Test', () =>{
    it('User Delete', async()=>{

        const status = await User.deleteOne({_id:'6135dbcb0fccf43054cb8468'});
        expect(status.ok).toBe(1);
    })
});