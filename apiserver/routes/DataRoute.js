const express = require('express');
const router = express.Router();
const apiUser = require("../controller/UserController");
const apiAdmin = require("../controller/AdminController");
const apiMeta = require("../controller/MetaController");
const apiHome = require("../controller/HomeController");
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


module.exports = router;