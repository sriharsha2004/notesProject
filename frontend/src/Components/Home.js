import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "./stylesheets/home.css"

const Home = () => {
    return (
        <div className='Home'>
            <Navbar/>
            <h1 className='header'>Quicknote</h1>
            <div className="main">
                <p className="tagline"> Simplify your thoughts with effortless notes. </p>
                <p className='description'>
                Effortless note-taking, endless possibilities.<br/>
                Streamline your ideas with simple notes.<br/>
                Simplicity meets productivity in note-taking.
                </p>
                <Link to="/SignUp" className="signup-button"> Sign up now </Link>

                <main className="contents">
                <section className="features">
                    <div className="feature">
                    <h3>Notes stay updated across all your devices</h3>
                    <p>Automatically and in real time. There's no "sync" button: It just works.</p>
                    </div>
                    <div className="feature">
                    <h3>Go back in time</h3>
                    <p>Notes are backed up with every change, so you can see what you noted last week or last month.</p>
                    </div>
                    <div className="feature">
                    <h3>Markdown support</h3>
                    <p>Write, preview, and publish your notes in Markdown format.</p>
                    </div>
                    <div className="feature">
                    <h3>It's free</h3>
                    <p>Apps, backups, syncing, sharing - it's all completely free.</p>
                    </div>
                </section>
                </main>
            </div>
        </div>
    );
}

export default Home;

