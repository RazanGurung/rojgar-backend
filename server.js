const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./database/database")
const path = require('path');
const env = require ("dotenv");
const public = path.join(__dirname,'')
const userrouter = require('./routes/user.js');
const jobpostrouter = require('./routes/jobpost.js');
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

app.get('/',function(req,res){
    res.send("Welcome to Rojgar.com")
})
app.listen(PORT);