const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./database/database")
const path = require('path');
const env = require ("dotenv");
const public = path.join(__dirname,'')
const userrouter = require('./routes/user.js');
const jobpostrouter = require('./routes/jobpost.js');
const searchrouter = require('./routes/search.js');
const applyjobrouter = require('./routes/applyjob.js');
const requestjobrouter = require('./routes/jobrequest.js');
const bookmarkrouter = require('./routes/bookmark');
const cors = require('cors');

env.config({
    path:"./.env"
})

connectDB();

const PORT = process.env.PORT || 8000
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(public));


app.use(bodyParser.urlencoded({extended:false}));

app.use(userrouter);
app.use(jobpostrouter);
app.use(searchrouter);
app.use(applyjobrouter);
app.use(requestjobrouter);
app.use(bookmarkrouter);

app.get('/',function(req,res){
    res.send("Welcome to Rojgar.com")
})
app.listen(PORT);