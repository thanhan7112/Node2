const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = 7000;

// app.use('/posts',() =>{
//     console.log('This is a middleware running');
// });
const postsRoute = require('./routes/posts');
app.use(cors());

app.use(bodyParser.json());

app.use('/posts', postsRoute);

mongoose.connect('mongodb+srv://nodejs2web:123456789An@cluster0.bcukn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
app.get('/',(req,res) =>{
    res.send('We are on home');
});

app.listen(Post,function(){
    console.log(`The server is running on ${Post}`);
});