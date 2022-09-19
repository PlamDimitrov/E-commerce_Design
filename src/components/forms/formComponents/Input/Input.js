import React from 'react';

import styles from './Input.module.css';

const Input = ({
    handleChange,
    value,
    type = "input",
    error = false,
    placeholder,
    autoComplete = false,
    name,
    isChecked
}) => {

    return <input
        onChange={(event) => handleChange(event)}
        value={value}
        type={type}
        className={`${styles[type]} ${error ? styles["error"] : ""} `}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        name={name}
        checked={isChecked}
    />
};

export default Input;