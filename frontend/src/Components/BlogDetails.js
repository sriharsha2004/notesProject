import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./stylesheets/blogdetails.css"
import "./stylesheets/notes.css"
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const [ispending,setispending] = useState(true);
    const [err,seterr] = useState(false);
    const [blog,setblog] = useState([]);

    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        setTimeout(() => {
            const fetchData = () =>{
                fetch("http://localhost:8081/getnotes/"+params.id)
                .then(res => res.json())
                .then((res)=>{
                    console.log(res.msg);
                    setispending(false);
                    seterr(false);
                    setblog(res.msg);
                })
                .catch((err)=>{
                    seterr(true);
                    setispending(false);
                })
            }
            fetchData();
        }, 1000);
        
    },[])

    var handledelete = (title) =>{
        const confirmation = window.confirm(`Do you want to delete Blog ${title} ???`);
        if(confirmation){
            const fetchData = () =>{
                fetch("http://localhost:8081/getnotes/deleteblog/"+params.id)
                .then(res => res.json())
                .then((res)=>{
                    if(res.msg === "Note Deleted!!!"){
                        history.go(-1);
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            fetchData(); 
        }
    }

    return (
        <div className='blog-details'>
            <button onClick={ ()=>history.go(-1) } id='addblog'> DashBoard </button>
            {err && <div>Could not fetch the data from the server </div>}
            { ispending && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952kwfxo4r4rnyhikmirqdemf0r6cxltx7fnntvilnn&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />}
            { blog.length===1 && (
                <div>
                    <h2>title : { blog[0].title }</h2>
                    <p>Subject : { blog[0].subject }</p>
                    <p className='blog-body'>{ blog[0].description }</p>
                    <button onClick={() => handledelete(blog[0].title)}>Delete Blog</button>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;
