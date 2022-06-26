import React from 'react';
import backgroundImage from '../../assets/img/background.png';
import styles from './Background.module.css';

const Background = () => {
    const titleString = "Welcome to Ave";
    const pageName = "Sign in or register";

    const stringToArray = titleString.split(' ');
    const firstWord = stringToArray.shift();
    const restOfString = stringToArray.join(' ');

    return <div className={styles["background"]}>
        <img src={backgroundImage} alt='Background' />
        <div className={styles['background-text']}>
            <div className={styles['page-title']}>
                <span className={styles['special']}> {firstWord} </span>
                <span>{restOfString}</span>
            </div>
            <div className={styles['page-name']}>
                <span>{pageName}</span>
            </div>
        </div>
    </div>
};

export default Background;