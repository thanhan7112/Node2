const User = require('../models/UserModel');
// const router = express.Router();
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// var salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
const key = "nguyenthanhan";
exports.Login = async (req, res) => {
    try {
        const user = await User.find({
            where: {
                Email: req.body.Email
            }
        });
        const match = await bcrypt.compare(req.body.Password, user[0].Password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user[0].id;
        const Email = user[0].Email;
        const accessToken = jwt.sign({ Email ,userId}, key, {
            expiresIn: '1h'
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ message: "Email not found" });
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
    const { Name, MobileNumber, Email, Password, confPassword } = req.body;
    if (Password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(Password, salt);
    try {
        await User.create({
            Name: Name,
            Email: Email,
            Password: hashPassword,
            MobileNumber: MobileNumber,
        });
        res.json({ message: "Registration Successful" });
        // res.json({token: jwt.sign({Email}, key)});
    } catch (error) {
        console.log(error);
    }
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

