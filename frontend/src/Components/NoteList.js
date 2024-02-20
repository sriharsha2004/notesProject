import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './stylesheets/notes.css'
import { useHistory } from 'react-router-dom';
import Getblogs from './Getblogs';

const NotesList = () => {
    const [empty,setempty] = useState(false);
    const [err,seterr] = useState(false);
    const [blogs,setblogs] = useState([]);
    
    const history = useHistory();
    const location = useLocation();
    // location.search -> ?username=***&password=***
    const searchparams = new URLSearchParams(location.search);
    // parsing and accessing the query parameters 
    const username = searchparams.get("username");
    const password = searchparams.get("password");
    

    useEffect(() => {

        const fetchData = ()=>{
            // used encodeURIComponent function beacuse , this password is the password
            // obtained from bcrypt nodemodule , but the hasheed password contains
            // several additional characters , which cannot be placed inside the url
            // so , this we encode it in the form of url . 
            // and then requeest
            // to test the request use encodeURIcompoonent and then try testing .

            fetch("http://localhost:8081/getnotes/all/"+username+"/"+encodeURIComponent(password))
            .then( res => res.json() )
            .then((res)=>{
                
                if(res.msg.length >= 1){
                    setblogs(res.msg);
                    setempty(true);
                }else{
                    setblogs([]);
                    setempty(false);
                }
            seterr(false);
            })
            .catch((err)=>{
                setblogs([]);
                setempty(false);
                seterr(true);
                console.log(err);
            })

        }
        fetchData();
    }, []);

    var addblog = ()=>{
        history.push("/newblog/"+encodeURIComponent(password));
    }

    var handleLogout = () =>{
        const confirmation = window.confirm("Do you Want to logout ???");
        if(confirmation){
            history.push("/SignIn");
        }else{
            return;
        }
    }

    return (
        <div className='note-list'>
            <button id="logoutbtn" onClick={ handleLogout }> LogOut </button>
            <button id="addblog" onClick={()=>addblog()}>Add Blog</button>
            {blogs.length > 0  && <Getblogs blogs = {blogs} head ="All Blogs!!!" />}
            {err && <div>Failed to load the data from the resource</div>}
            {!empty && <div>No Blogs Found</div>}
            {/* <div>These are your blogs</div> */}
        </div>
    );
}

export default NotesList;

