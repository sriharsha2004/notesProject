import React from 'react';
import "./stylesheets/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
             <footer className="footer">
            <div className="footer-container">
                <div className="links">
                    <a href="#">Privacy Policy</a>
                    <div className="copyright">@Copyrights 2024</div>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us&nbsp;&nbsp;</a>
                </div>
                <div className="social-media">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;
