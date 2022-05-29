const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = 9000;
const metaRoute = require('./routes/meta');

app.use(cors());

app.use(bodyParser.json());

app.use('/meta', metaRoute);

mongoose.connect('mongodb+srv://nodejs2web:123456789An@cluster0.bcukn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true});
app.get('/',(req,res) =>{
    res.send('We are on home');
});

app.listen(Post,function(){
    console.log(`The server is running on ${Post}`);
});