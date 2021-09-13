const Bookmark= require("../models/bookmark");
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

describe('Bookmark Schema Test', () =>{
    it('Add Bookmark', () =>{
        const bookmark = {
            'userid':'fsdfsfsadfas',
            'workid':'sfdafasfsadfafa',
            'worktitle':'test title',
            'proficiency':'test proficiency',
            'esttime':'2 hrs',
            'paytype':'fixed',
            } 
        return Bookmark.create(bookmark)
            .then((pro_ret) => {
                expect(pro_ret.worktitle).toEqual('test title');
        });
    });
});
describe('Bookmark Schema Test', () =>{
    it('Update Bookmark', async () =>{
        return Bookmark.findOneAndUpdate({
            _id:Object('613657942475892704c43ea9')
        },{$set : {worktitle:'test work title'}})
           .then((bookmark)=>{
            expect(bookmark.worktitle).toEqual('test work title')
        })
    })
});
describe('Bookmark Schema Test', () =>{
    it('Bookmark Delete', async()=>{
        const status = await Bookmark.deleteOne({_id:'613657942475892704c43ea9'});
        expect(status.ok).toBe(1);
    })
});