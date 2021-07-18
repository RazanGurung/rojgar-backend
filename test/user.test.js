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
            'email':'test@gmail.com',
            'address':'test, 123 road',
            'phone':9812345678,
            'password':'test123',
        } 
        return User.create(user)
            .then((pro_ret) => {
                expect(pro_ret.firstname).toEqual('test');
        });
    })
})