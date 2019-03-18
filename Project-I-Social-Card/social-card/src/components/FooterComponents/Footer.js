import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <img className="chat-icon" src="img/interface.svg"></img>
            <img className="refresh-icon" src="img/arrows.svg"></img>
            <img className="heart-icon" src="img/heart.svg"></img>
            <img className="message-icon" src="img/email.svg"></img>
        </div>
    );
}

export default Footer;