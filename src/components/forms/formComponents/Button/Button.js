import React from 'react';

import styles from './Button.module.css';

import spinner from '../../../../assets/spinner_v3.gif';

const Button = ({ isLoading, handleClick, text, type = "button", colour, size, isActive = true }) => {

    return <div className={`${styles["container"]}`}>
        <button
            type={type}
            onClick={(event) => handleClick(event)}
            disabled={!isActive}
            className={`${styles["btn"]} ${styles[colour]} ${styles[size]}`}>
            {text}
        </button>
        <img className={`${styles['loader']} ${isLoading ? styles["active"] : ""}`} src={spinner} alt="spinner" />
    </div>
};

export default Button;