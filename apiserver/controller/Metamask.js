const MetaPay = require("../models/Metamask");

exports.GetMeta = async (res, req) => {
    try{
        const meta = await MetaPay.find();
        res.json(meta);
    }catch (err) {
        res.json({message: err});
    }
}

exports.CreatePayMeta = async (req, res) =>{
    const meta = new MetaPay({
        // xdata: req.body.xdata,
        hash: req.body.hash,
        to: req.body.to,
        from: req.body.from,
        Name: req.body.Name,
        Price: req.body.Price

    });
    try {
        const savedMeta = await meta.save();
        res.json(savedMeta);
    }catch (err) {
        res.json({message: err});
    }
}

exports.GetMetaById = async (req, res) =>{
    MetaPay.findById(req.params.metaId, function(err, response) {
        if(err) {
            res.status(201).json({
                code:201,
                message:"Co loi khi nhan meta theo id",
            })
        }else{
            res.status(200).json({
                code:200,
                message:"Thanh cong khi lay du lieu meta theo id",
                data: response
            })
        }
    })
}

exports.DeleteMeta = async (res, req) =>{
    MetaPay.remove({_id: req.params.metaId}, function(err, response) {
        if(err) {
            res.status(201).json({
                code:201,
                message:"Co loi khi xoa meta",
            })
        }else{
            res.status(200).json({
                code:200,
                message:"Xoa meta thanh cong",
                data: response
            })
        }
    })
}

exports.UpdateMeta = async (res, req) =>{
    MetaPay.findByIdAndUpdate({_id: req.params.metaId}, {$set: req.body}, function(err, response){
        if(err) {
            res.status(201).json({
                code:201,
                message:"Co loi khi update meta"
            })
        }else{
            res.status(200).json({
                code:200,
                message:"Update meta thanh cong",
                data: response
            })
        }
    })
}