const Home = require('../models/HomeModel');

exports.GetHome = async(req, res) =>{
    try{
        const home = await Home.find();
        res.json(home);
    }catch(err) {
        res.json({message: err});
    }
}

exports.PostHome = async(req, res) =>{
       
    const home = new Home({
        MainTitle: req.body.MainTitle,
        TitleSub: req.body.TitleSub,
        MainTitle2: req.body.MainTitle2,
        MainTitle3: req.body.MainTitle3,
        PhoneNumber: req.body.PhoneNumber,
        EmailShop: req.body.EmailShop

    });
    try {
        const savedHome = await home.save();
        res.json(savedHome);
    }catch (err) {
        res.json({message: err});
    }
}

exports.GetHomeById = async(req, res) =>{
    try{
        const home = await Home.findById(req.params.homeId);
        res.json(home);
    }catch (err) {
        res.json({message: err});
    }
};
exports.DeleteHome = async (req, res) =>{
    try{
        const removeHome = await Home.findByIdAndDelete({_id: req.params.homeId});
        res.json(removeHome);
    }catch(err) {
        res.json({message: err});
    }
}

exports.UpdateHome = async (req, res) =>{
    try{
        const updateHome = await Home.findByIdAndUpdate({_id: req.params.homeId}, {$set: req.body});
        res.json(updateHome);
    }catch (err) {
        res.json({message: err});
    }
};
