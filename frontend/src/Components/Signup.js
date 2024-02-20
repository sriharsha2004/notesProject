import React from 'react';
import {useHistory} from 'react-router-dom'
import  { useState } from 'react'
import Navbar from './Navbar';

const SignUp = () => {
    const [username,setusername] = useState();
    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    var [err,seterr] = useState(false);
    var [ispending,setispending] = useState(false);
    var [btnstatus,setbtnstatus] = useState(false);

    const history = useHistory();

    var handleSubmit = (e)=>{
        e.preventDefault();
        var userdata = {};
        userdata.username = username;
        userdata.email = email;
        userdata.password = password;
        fetch("http://localhost:8081/signup?username="+username+"&email="+email+"&password="+password)
        .then(res => res.json())
        .then((res)=>{
            if(res.msg === "User Added Successfully"){
                seterr(false);
                setbtnstatus(true);
                setispending(true);
                setTimeout(()=>{
                    setispending(false);
                    setbtnstatus(false);
                    history.push("/SignIn")
                },2000)
            }
        })
        .catch((err)=>{
            setbtnstatus(false);
            seterr(true);
            console.log(err);
        })
    }

    return (
        <div className='SignUp'>
            <Navbar/>
           <form className="signup" onSubmit={handleSubmit}>
                <h2>SignUp Page</h2>
                <label>Username : </label>
                <input type="text" required onChange={(e)=>{setusername(e.target.value)}}/>
                <label>Email Id : </label>
                <input type="email" required onChange={(e)=>{setemail(e.target.value)}} />
                <label>Password :</label>
                <input type="text" required onChange={(e)=>{setpassword(e.target.value)}} />
                {!btnstatus && <button>SignUp</button>}    
                {btnstatus && <button disabled> Signing Up ...</button>}          
            </form>
            { err && <div>Could not fetch the data from the server </div>}
        </div>
    );
}

export default SignUp;
