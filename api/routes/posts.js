const express = require('express');
const Post = require('../models/posts');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        Name: req.body.Name,
        Price: req.body.Price,
        Author: req.body.Author
    });
    try {
        const savedPost = await post.save();
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
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate({ _id: req.params.postId }, { $set: req.body});
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;