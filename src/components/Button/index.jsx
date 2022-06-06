import React from "react";
import './style.scss'

function Button({ text }) {
    return (
        <button className="app__button">
            {text}
        </button>
    );
}

export default Button;
