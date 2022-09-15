import React from 'react';

import styles from './Button.module.css';

import spinner from '../../assets/spinner_v3.gif';

const Button = ({ isLoading, handleClick, text, type, colour, size, isActive = true }) => {

    return <button
        type={type}
        onClick={(event) => handleClick(event)}
        disabled={!isActive}
        className={`${styles["btn"]} ${styles[colour]} ${styles[size]}`}>
        {isActive ? text : "---"}
        {isLoading ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
    </button>
};

export default Button;