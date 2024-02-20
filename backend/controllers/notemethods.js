const model = require("../models/noteschema")

// get all notes
var getallnotes = (req,res)=>{
    // console.log(req.params);
    // use req.params id route is in the form of /get/nms/nms
    // use req.query if route is /get?username=***&password=***
    
    model.find({password : req.params.password})
    .then((data)=>{
        // console.log(data);
        res.json({ msg : data})
    })
    .catch((err)=>{
        res.json({msg : "Error occured!!!"})
    })
}

// get a single note
var getnote = (req,res) =>{
    model.find({_id : req.params.id})
    .then((data)=>{
        console.log(data);
        res.json({msg : data});
    })
    .catch((err)=>{
        res.json({msg : "Error occured!!!"})
    })
}

// create a note
var createnote = (req,res)=>{
    const note = {
        title : req.params.title,
        subject : req.params.subject,
        description : req.params.description,
        password : req.params.password
    }
    // console.log(note);
    // res.json({msg : note});
    const newnote = new model(note);
    newnote.save()
    .then((data)=>{
        // console.log(data);
        res.json({msg : "Note added!!!"});
    })
    .catch((err)=>{
        console.log(err);
        res.json({msg : "Error occured!!!"})
    })
}

// delete a note
var deletenote = (req,res)=>{
    model.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log(data);
        res.json({msg : "Note Deleted!!!"});
    })
    .catch((err)=>{
        res.json({msg : "Error occured!!!"})
    })
}

// update a note
var updatenote=(req,res)=>{
    model.findByIdAndUpdate(req.params.id , req.body)
    .then((data)=>{
        console.log(data);
        res.status(200).json({msg : "Note Updated!!!"});
    })
    .catch((err)=>{
        res.status(404).json({msg : "Error occured!!!"})
    })
}

module.exports = {
    getallnotes,
    createnote,
    getnote,
    deletenote,
    updatenote
}