import React from "react";
import './Button.scss'

function Button({ text, type }) {
    return (
        <button type={type} className="app__button">
            {text}
        </button>
    );
}

export default Button;
