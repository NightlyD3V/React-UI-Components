import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="chat-container">
                <img className="chat-icon" src="img/interface.svg"></img>
                <p></p>
            </div>
            <div className="share-container">
                <img className="share-icon" src="img/arrows.svg"></img>
                <p>6</p>
            </div>
            <div className="heart-container">
                <img className="heart-icon" src="img/heart.svg"></img>
                <p>4</p>
            </div>
            <img className="message-icon" src="img/email.svg"></img>
        </div>
    );
}

export default Footer;