const Admin = require('../models/AdminModel');
const mongoose = require('mongoose');


exports.GetProduct = async (req, res) =>{
    try {
        const products = await Admin.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.CreateProduct = async (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    const product = new Admin({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Price: req.body.Price,
        Author: req.body.Author,
        Detail: req.body.Detail,
        profileImg: url + '/public/' + req.file.filename
    });
    try {
        const savedProduct = await product.save().then(result => {
            res.status(201).json({
                message: "User registered successfully!",
                userCreated: {
                    _id: result._id,
                    profileImg: result.profileImg,
                    Name: result.Name,
                    Price: result.Price,
                    Author: result.Author,
                    Detail: result.Detail
                }
            })
    })
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err }); 
    }
}

exports.GetProductById = async (req, res) =>{
    try {
        const product = await Admin.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.DeleteProduct = async (req, res) =>{
    try {
        const removedProduct = await Admin.remove({ _id: req.params.productId });
        res.json(removedProduct);
    } catch (err) {
        res.json({ message: err })
    }
}

exports.UpdateProduct = async (req, res) => {
    try {
        const updatedProduct = await Admin.findByIdAndUpdate(
            { _id: req.params.productId }, { $set: req.body }
            );
        res.json(updatedProduct);
    } catch (err) {
        res.json({ message: err });
    }
}