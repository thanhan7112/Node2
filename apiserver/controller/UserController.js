const User = require('../models/UserModel');
// const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
const key = "nguyenthanhan";
exports.Login = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ Email: body.Email });
    if (user) {
      const validPassword = await bcrypt.compare(body.Password, user.Password);
      if (validPassword) {
        res.status(200).json({
          code:200,
          message: "Mat khau hop le",
          token: jwt.sign({Email: user.Email, _id: user._id},key, {expiresIn:"1h"})
        });
      } else {
        res.status(400).json({ error: "Mat khau khong hop le" });
      }
    } else {
      res.status(401).json({ error: "Nguoi dung khong hop le" });
    }
  }
exports.getUsers = async (req, res) => {
    try {
        const user = await User.find({
            attributes: ['id', 'Name', 'Email', 'MobileNumber']
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}
exports.Register = async (req, res) => {
//     var data = new User();
//     data.Email = req.body.Email;
//     data.Name = req.body.Name;
//     data.MobileNumber = req.body.MobileNumber;
//     data.Password = bcrypt.hashSync(req.body.Password, salt);
//     data.save(function(err, response) {
//         if(err) {
//             res.status(201).json({
//                 code:201,
//                 message:" Co loi"
//             })
//         }else{
//             res.status(200).json({
//                 code:200,
//                 message:" thanh cong",
//                 data: response,
//                 token: jwt.sign({Email:response.email, _id: response._id},key)
//             })
//         }
//     })
// }
const body = req.body;
if (!(body.Email && body.Password)) {
  return res.status(400).send({ error: "Du lieu khong dung dinh dang" });
}
const user = new User(body);
const salt = await bcrypt.genSalt(10);
user.Password = await bcrypt.hash(user.Password, salt);
user.save().then((doc) => res.status(201).send(doc));
}
// exports.GetUseId = async (req, res) => {
//     const data = {
//         MobileNumber : req.body.MobileNumber,
//         Name : req.body.Name,
//         Email: req.body.Email
//     }
//     User.findById(req.params.userId,data, function (err, response) {
//         if(err) {
//             res.status(201).json({
//                 code:201,
//                 message:" co Loi"
//             })
//         }else{
//             res.status(200).json({
//                 code:200,
//                 message:" thanh cong",
//                 data: response
//             })
//         }
//     });    
// }
// exports.UpdateUser = async (req, res) => {
//     const data = {
//         MobileNumber : req.body.MobileNumber,
//         Name : req.body.Name,
//     }
//     User.findByIdAndUpdate({_id: req.params.userId}, data, function(err, response) {
//         if (err) {
//             res.status(201).json({
//                 code:201,
//                 message:" co Loi"
//             })
//         }else{
//             res.status(200).json({
//                 code:200,
//                 message:"Thanh cong",
//                 data: response
//             })
//         }
//     });
// }

// exports.DeleteUser = (res, req, next) => {
//     User.findByIdAndDelete({_id: req.params.userId}, function (err, response) {
//         if(err) {
//             res.status(201).json({
//                 code:201,
//                 message:" co Loi"
//             })
//         }else{
//             res.status(200).json({
//                 code:200,
//                 message:"Xoa thanh cong",
//                 data: response
//             })
//         }
//     });
// }

