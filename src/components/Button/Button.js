import React from 'react';

import styles from './Button.module.css';

import spinner from '../../assets/spinner_v3.gif';

const Button = ({ isLoading, handleClick, btnSubmit: btnText, type, colour }) => {

    return <button type={type} onClick={(event) => handleClick(event)} className={`${styles["btn"]} ${styles[colour]}`}>
        {btnText}
        {isLoading ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
    </button>
};

export default Button;