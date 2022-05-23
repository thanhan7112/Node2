const express = require('express');
const Post = require('../models/posts');
const router = express.Router();
let multer = require('multer'),
    mongoose = require('mongoose'),
    { v4: uuidv4 } = require('uuid');
uuidv4();

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/',upload.single('profileImg'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    // console.log(req.body);
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Price: req.body.Price,
        Author: req.body.Author,
        Detail: req.body.Detail,
        profileImg: url + '/public/' + req.file.filename
    });
    try {
        const savedPost = await post.save().then(result => {
            res.status(201).json({
                message: "User registered successfully!",
                userCreated: {
                    _id: result._id,
                    profileImg: result.profileImg
                }
            })
    })
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err }); 
    }
});
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err })
    }
});
//update
router.patch('/:postId',upload.single('profileImg'), async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            { _id: req.params.postId }, { $set: req.body }
            );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;