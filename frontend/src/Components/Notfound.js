import React from 'react';
import "./stylesheets/notfound.css"
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="not-found">
            <Link to="/" id="goback"> Home </Link>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default Notfound;
