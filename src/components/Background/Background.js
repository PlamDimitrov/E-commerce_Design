import React from 'react';
import PropTypes from 'prop-types';

import styles from './Background.module.css';

import backgroundImage from '../../assets/img/background.png';

const Background = (props) => {

    let pageName = null;
    let stringToArray = null;
    let firstWord = null;
    let restOfString = null;

    if (props.titleString) {
        pageName = props.pageName;
    }
    if (props.titleString) {
        stringToArray = props.titleString.split(' ');
        firstWord = stringToArray.shift();
        restOfString = stringToArray.join(' ');
    }

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

Background.propTypes = {
    titleString: PropTypes.string,
    pageName: PropTypes.string,
}

export default Background;