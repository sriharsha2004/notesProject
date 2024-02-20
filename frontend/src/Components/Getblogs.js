import React from 'react';
import { Link } from 'react-router-dom';
import "./stylesheets/notes.css"

const Getblogs = (props) => {
    var blogs = props.blogs;
    var heading = props.head;

    return (
        <div>
            <h2>{ heading }</h2>
            {                
                blogs.map((blog)=>(
                    <div className='blog-preview' key={blog._id}>
                        <Link to={`/getnotes/${blog._id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Subject : { blog.subject }</p>
                            {/* <button onClick={()=> deleteblog(blog.id)} >delete blog</button> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Getblogs;
