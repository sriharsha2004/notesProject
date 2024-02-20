require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");


const noteshandler = require("./routes/noteshandler");
const signuphandler = require("./routes/signuphandler");
const validateUser = require("./routes/validateUser")

// var sessionConfig = {
//     secret : process.env.MY_SECRET,
//     cookie : {maxAge : 60000}
// }

const app = express();
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
// app.use(session(sessionConfig));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to db");
    app.listen(process.env.PORT,()=>{
        console.log("Server is listening on port number "+process.env.PORT);
    })
})
.catch((err)=>{
    console.log(err);
})

app.use("/getnotes",noteshandler);
app.use("/signup",signuphandler);
app.use("/validateuser",validateUser);

