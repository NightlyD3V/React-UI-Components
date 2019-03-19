import React from 'react';
import './Button.css';

const ActionButtons = props => {
    return (
        <div>
            <div>
                <button className={props.buttonStyle}>÷</button>
                <button className={props.buttonStyle}>x</button>
                <button className={props.buttonStyle}>−</button>
                <button className={props.buttonStyle}>+</button>
                <button className={props.buttonStyle}>=</button>
            </div>
        </div>
    )
}

export default ActionButtons