const express = require("express")
const router = express.Router();
const bcrypt  = require("bcrypt");

const model = require("../models/signupSchema")

router.get("/",(req,res)=>{
    model.find({username : req.query.username})
    .then((data)=>{
        if(data.length === 0){
            res.json({msg : "Not a Valid User"});
        }
        var passwordfromdb = data[0].password;
        bcrypt.compare(req.query.password , passwordfromdb , (err,result)=>{
            if(result){
                res.json({msg : "Valid User Credentials" , pwd : passwordfromdb});
            }
            else{
                res.json({msg : "Not a Valid User"});
            }
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})


module.exports = router;

