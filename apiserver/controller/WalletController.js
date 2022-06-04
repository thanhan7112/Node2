const Wallet = require('../models/WalletModel');

exports.GetWallet = async(req, res) =>{
    try{
        const wallet = await Wallet.find();
        res.json(wallet);
    }catch(err) {
        res.json({message: err});
    }
}
exports.PostWallet = async(req, res) =>{
       
    const wallet = new Wallet({
        AddressWallet: req.body.AddressWallet,
        Owner: req.body.Owner
    });
    try {
        const savedWallet = await wallet.save();
        res.json(savedWallet);
    }catch (err) {
        res.json({message: err});
    }
}

exports.GetWalletById = async(req, res) =>{
    try{
        const wallet = await Wallet.findById(req.params.walletId);
        res.json(wallet);
    }catch (err) {
        res.json({message: err});
    }
};
exports.DeleteWallet = async (req, res) =>{
    try{
        const removeWallet = await Wallet.findByIdAndDelete({_id: req.params.walletId});
        res.json(removeWallet);
    }catch(err) {
        res.json({message: err});
    }
}

exports.UpdateWallet = async (req, res) =>{
    try{
        const updateWallet = await Wallet.findByIdAndUpdate({_id: req.params.walletId}, {$set: req.body});
        res.json(updateWallet);
    }catch (err) {
        res.json({message: err});
    }
};
