
const Meta = require('../models/meta');

exports.GetMeta = async(req, res) => {
    try{
        const metam = await Meta.find();
        res.json(metam);
    }catch (err) {
        res.json({message: err});
    }
}

exports.CreatePayMeta = async(req, res) =>{
    const meta = new Meta({
        hash: req.body.hash,
        to: req.body.to,
        from: req.body.from,
        Name: req.body.Name,
        Price: req.body.Price,
        ether: req.body.ether

    });
    try {
        const savedMeta = await meta.save();
        res.json(savedMeta);
    }catch (err) {
        res.json({message: err});
    }
}

exports.GetMetaById = async(req, res) =>{
    try{
        const meta = await Meta.findById(req.params.metaId);
        res.json(meta);
    }catch (err) {
        res.json({message: err});
    }
};
exports.DeleteMeta = async (req, res) =>{
    try{
        const removeMeta = await Meta.findByIdAndDelete({_id: req.params.metaId});
        res.json(removeMeta);
    }catch(err) {
        res.json({message: err});
    }
}

exports.UpdateMeta = async (req, res) =>{
    try{
        const updateMeta = await Meta.findByIdAndUpdate({_id: req.params.metaId}, {$set: req.body});
        res.json(updateMeta);
    }catch (err) {
        res.json({message: err});
    }
};
