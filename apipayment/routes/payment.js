const express = require('express');
const Payment = require('../models/payment');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const payment = new Payment({
        CardNumber: req.body.CardNumber,
        Expiry: req.body.Expiry,
        CVV: req.body.CVV,
    });
    try {
        const savedPayment = await payment.save();
        res.json(savedPayment);
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/:paymentId', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.paymentId);
        res.json(payment);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:paymentId', async (req, res) => {
    try {
        const removedPayment = await Payment.remove({ _id: req.params.paymentId });
        res.json(removedPayment);
    } catch (err) {
        res.json({ message: err })
    }
});
//update
router.patch('/:paymentId', async (req, res) => {
    try {
        const updatedPayment = await User.findByIdAndUpdate({ _id: req.params.paymentId }, { $set: req.body});
        res.json(updatedPayment);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;