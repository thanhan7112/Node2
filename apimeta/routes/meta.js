const express = require('express');
const Meta = require('../models/meta');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const metam = await Meta.find();
        res.json(metam);
    }catch (err) {
        res.json({message: err});
    }
});

router.post('/', async(req, res) =>{
    const meta = new Meta({
        // xdata: req.body.xdata,
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
})

router.get('/:metaId', async(req, res) =>{
    try{
        const meta = await Meta.findById(req.params.metaId);
        res.json(meta);
    }catch (err) {
        res.json({message: err});
    }
});
router.delete('/:metaId', async (req, res) =>{
    try{
        const removeMeta = await Meta.remove({_id: req.params.metaId});
        res.json(removeMeta);
    }catch(err) {
        res.json({message: err});
    }
});

router.patch('/:metaId', async (req, res) =>{
    try{
        const updateMeta = await Meta.findByIdAndUpdate({_id: req.params.metaId}, {$set: req.body});
        res.json(updateMeta);
    }catch (err) {
        res.json({message: err});
    }
});

module.exports = router;