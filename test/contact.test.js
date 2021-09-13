const Contact= require("../models/contact");
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

describe('Contact Schema Test', () =>{
    it('Add Contact', () =>{
        const contact = {
                'firstname':'test',
                'lastname':'test',
                'email':'test@gmail.com',
                'phone':'1234567890',
                'message':'hello test',
            } 
        return Contact.create(contact)
            .then((pro_ret) => {
                expect(pro_ret.message).toEqual('hello test');
        });
    });
});
describe('Contact Schema Test', () =>{
    it('Update Contact', async () =>{
        return Contact.find({
            _id:Object('61365379325d9b050c99ab56')
        })
           .then((contact)=>{
            expect(contact.message).toEqual('hello test')
        })
    })
});
describe('Contact Schema Test', () =>{
    it('Contact Delete', async()=>{
        const status = await Contact.deleteOne({_id:'61365379325d9b050c99ab56'});
        expect(status.ok).toBe(1);
    })
});