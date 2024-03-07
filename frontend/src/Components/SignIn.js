import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar';
import { FaEye , FaEyeSlash  } from "react-icons/fa";
import CryptoJS from 'crypto-js';

const SignIn = () => {

    const [username,setusername] = useState();
    const [password,setpassword] = useState();
    var [err,seterr] = useState(false);
    var [showpassword,setshowpassword] = useState(false);
    // var [ispending,setispending] = useState(false);
    var [btnstatus,setbtnstatus] = useState(false);
    const history = useHistory();

    function encryptData(data, secretKey) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    }

    var handleSubmit = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8081/validateuser?username="+username+"&password="+password)
        .then(res => res.json())
        .then((res)=>{
            if(res.msg === "Valid User Credentials"){
                seterr(false);
                setbtnstatus(true);
                // setispending(true);
                setTimeout(()=>{
                    // setispending(false);
                    setbtnstatus(false);
                    const data = encryptData("true", "abcd");
                    localStorage.setItem("token", data);
                    // localStorage.setItem("token",true);
                    history.push("/NotesList?username="+username+"&password="+res.pwd);
                },2000)
            }
            if(res.msg === "Not a Valid User"){
                history.push("/SignUp");
            }
        })
        .catch((err)=>{
            setbtnstatus(false);
            seterr(true);
            console.log(err);
        })
    }

    return (
        <div className='SignIn'>
            <Navbar/>
            <form className="signin" onSubmit={handleSubmit}>
                <h2>SignIn Page</h2>
                <label>UserName : </label>
                <input type="text" required onChange={(e)=>setusername(e.target.value)}/>
                <label>Password :</label>
                <div>
                <input type={showpassword ? "text" : "password"}
                required 
                onChange={(e)=>setpassword(e.target.value)}                
                />
                <span onClick={()=> showpassword? setshowpassword(false) : setshowpassword(true)} id='showpw'>
                    { showpassword? <FaEyeSlash/> : <FaEye /> }
                </span>
                </div>
                {!btnstatus && <button>SignIn</button>}    
                {btnstatus && <button disabled> Signing In please Wait ...</button>}          
            </form>
            { err && <div>Could not fetch the data from the server </div>}
        </div>
    );
}

export default SignIn;
