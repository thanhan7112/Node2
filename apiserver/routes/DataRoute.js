const express = require('express');
const router = express.Router();
const apiUser = require("../controller/UserController");
const apiAdmin = require("../controller/AdminController");
const apiMeta = require("../controller/MetaController");
const apiHome = require("../controller/HomeController");
const apiContact = require("../controller/ContactController");
const apiFooter = require("../controller/FooterController");
const apiWallet = require("../controller/WalletController");
let multer = require('multer'),
    { v4: uuidv4 } = require('uuid');
uuidv4();

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
//Pay with metamask
router.get('/metamask', apiMeta.GetMeta)
router.get('/metamask/:metaId', apiMeta.GetMetaById);
router.post('/metamask', apiMeta.CreatePayMeta);
router.delete('/metamask/:metaId', apiMeta.DeleteMeta);
router.patch('/metamask/:metaId', apiMeta.UpdateMeta);
//UserLogin
router.post('/login', apiUser.Login);
router.post('/regist', apiUser.Register);
router.get('/users',apiUser.getUsers);
// router.delete('/users/:userId', apiUser.DeleteUser);
// router.patch('/users/:userId', apiUser.UpdateUser);
// router.get('/users/:userId', apiUser.GetUseId);

//Products
router.get('/products', apiAdmin.GetProduct);
router.get('/products/:productId', apiAdmin.GetProductById);
router.post('/products',upload.single('profileImg'), apiAdmin.CreateProduct);
router.delete('/products/:productId', apiAdmin.DeleteProduct);
router.patch('/products/:productId', upload.single('profileImg'),apiAdmin.UpdateProduct);

//Home
router.get('/home', apiHome.GetHome);
router.get('/home/:homeId', apiHome.GetHomeById);
router.post('/home', apiHome.PostHome);
router.delete('/home/:homeId', apiHome.DeleteHome);
router.patch('/home/:homeId', apiHome.UpdateHome);

//Contact
router.get('/contact', apiContact.GetContact);
router.get('/contact/:contactId', apiContact.GetContactById);
router.post('/contact', apiContact.PostContact);
router.delete('/contact/:contactId', apiContact.DeleteContact);
router.patch('/contact/:contactId', apiContact.UpdateContact)

//Footer
router.get('/footer', apiFooter.GetFoo);
router.get('/footer/:footerId', apiFooter.GetFooterById);
router.post('/footer', apiFooter.PostFooter);
router.delete('/footer/:footerId', apiFooter.DeleteFooter);
router.patch('/footer/:footerId', apiFooter.UpdateFooter)

//Wallet
router.get('/wallet', apiWallet.GetWallet);
router.get('/wallet/:walletId', apiWallet.GetWalletById);
router.post('/wallet', apiWallet.PostWallet);
router.delete('/wallet/:walletId', apiWallet.DeleteWallet);
router.patch('/wallet/:walletId', apiWallet.UpdateWallet)
module.exports = router;