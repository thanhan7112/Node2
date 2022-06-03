const Footer = require('../models/FooterModel');

exports.GetFoo = async(req, res) =>{
    try{
        const footer = await Footer.find();
        res.json(footer);
    }catch(err) {
        res.json({message: err});
    }
}

exports.PostFooter = async(req, res) =>{
       
    const footer = new Footer({
        Services: req.body.Services,
        ServicesDetail: req.body.ServicesDetail,
        About: req.body.About,
        AboutDetail: req.body.AboutDetail,
        ShopName: req.body.ShopName

    });
    try {
        const savedFooter = await footer.save();
        res.json(savedFooter);
    }catch (err) {
        res.json({message: err});
    }
}

exports.GetFooterById = async(req, res) =>{
    try{
        const footer = await Footer.findById(req.params.footerId);
        res.json(footer);
    }catch (err) {
        res.json({message: err});
    }
};
exports.DeleteFooter = async (req, res) =>{
    try{
        const removeFooter = await Footer.findByIdAndDelete({_id: req.params.footerId});
        res.json(removeFooter);
    }catch(err) {
        res.json({message: err});
    }
}

exports.UpdateFooter = async (req, res) =>{
    try{
        const updateFooter = await Home.findByIdAndUpdate({_id: req.params.footerId}, {$set: req.body});
        res.json(updateFooter);
    }catch (err) {
        res.json({message: err});
    }
};
