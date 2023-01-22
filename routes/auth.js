const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(401).json(err);
    }
})

// Login
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})

        !user && res.status(402).json("Incorrect Credentials!")

        const hashPassword = CryptoJS.AES.decrypt(user.password , process.env.PASS_SEC);
        const pswrd = hashPassword.toString(CryptoJS.enc.Utf8);

        pswrd !== req.body.password && res.status(402).json("Incorrect Credentials!")

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC,
            {
                expiresIn: "7d",
            }
        )

        const {password, ...others} = user._doc;
        res.status(201).json({...others, accessToken});
    }
    catch(err){
        res.status(401).json(err);
    }
})

module.exports = router;