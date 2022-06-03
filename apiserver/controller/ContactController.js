const Contact = require("../models/ContactModel");

exports.GetContact = async(req, res) =>{
    try{
        const contact = await Contact.find();
        res.json(contact);
    }catch(err) {
        res.json({message: err});
    }
}

exports.PostContact = async(req, res) =>{
    const contact = new Contact({
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message,
    });
    try{
        const saveContact = await contact.save();
        res.json(saveContact);
    }catch (err) {
        res.json({message: err})
    }
}
exports.GetContactById = async(req, res) =>{
    try{
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    }catch (err) {
        res.json({message: err});
    }
};
exports.DeleteContact = async (req, res) =>{
    try{
        const removeContact = await Contact.findByIdAndDelete({_id: req.params.contactId});
        res.json(removeContact);
    }catch(err) {
        res.json({message: err});
    }
}

exports.UpdateContact = async (req, res) =>{
    try{
        const updateContact = await Contact.findByIdAndUpdate({_id: req.params.contactId}, {$set: req.body});
        res.json(updateContact);
    }catch (err) {
        res.json({message: err});
    }
};
