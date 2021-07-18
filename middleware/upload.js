const multer = require('multer');

const storage = multer.diskStorage({
    destination :function(req,file,cb) {
        cb(null,'./images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + "_" + file.originalname)
    }
});

const fileFilter = function(res,file,cb){
    if(file.mimetype == 'image/jpeg'|| file.mimetype == 'image/png'){
        cb(null,true);
    }
    else{
        cb(null,false)
    }
}

const fileSize = function(res,file,cb){
    if(file.size <= 7340032){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({ 
       storage : storage,
       fileFilter : fileFilter,
       size : fileSize
});

module.exports = upload