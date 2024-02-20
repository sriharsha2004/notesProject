import React, { useState } from 'react';
import './stylesheets/addblog.css'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Addblog = () => {
  const [title, settitle] = useState('');
  const [subject, setsubject] = useState('');
  const [description, setdescription] = useState('');
  const [err,seterr] = useState(false);
  const [pending,setpending]  = useState(false);

  const history = useHistory();
  const params = useParams();

//   useParams is used to gather dynamic part in the current URL
    // console.log(params.password)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/getnotes/"+title+"/"+subject+"/"+description+"/"+params.password)
    .then((res => res.json()))
    .then((res)=>{
       if(res.msg === "Note added!!!"){
          seterr(false);
          setpending(true);
          setTimeout(()=>{
            setpending(false);
            history.go(-1);
          },2000)
       }else{
        seterr(true);
       }
    })
    .catch((err)=>{
      console.log(err)
      seterr(true);
    })
  };

  return (
    <div className='outline'>
        {/* history.goBack to get back to previosly visited url */}
        <button id='dashboard' onClick={()=>history.go(-1)} >DashBoard </button>
        <div className="add-blog-container">
        <h2>Create a New Note</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" required value={title} onChange={(e) => settitle(e.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" required value={subject} onChange={(e) => setsubject(e.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" required value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
            </div>
            { !pending && <button type="submit">Submit</button>}
            { pending && <button type="submit" disabled>Creating a New Blog ...</button>}
            { err && <div>Failed to Add a new Blog</div> }
        </form>
        </div>
    </div>
  );
};

export default Addblog;
