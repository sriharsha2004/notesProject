const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt");
const saltrounds = 10;

const model = require("../models/signupSchema");

router.get("/" , (req,res)=>{

    var password = req.query.password;
    bcrypt.hash(password,saltrounds,(err,encryptedpwd)=>{
        req.query.password = encryptedpwd;
        
        const newuser = new model(req.query);
        newuser.save()
        .then((data)=>{
            res.json({ msg: "User Added Successfully" });
        })
        .catch((err)=>{
            res.json({ msg: "Error occurred while adding"});
        })
    })

})

module.exports = router;