import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <h1 className="card-h1">Get Started With React!</h1>
            <p className="card-p">React makes it painless to create interactive UIs. Design
                simple views for each state in your application.
            </p>
            <a className="card-link" href="#">reactjs.org</a>
        </div>
    );
}

export default CardContent; 