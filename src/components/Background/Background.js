import React from 'react';
import backgroundImage from '../../assets/img/background.png';
import './Background.css';

const Background = () => {
    const titleString = "Welcome to Ave";
    const pageName = "Sign in or register";

    const stringToArray = titleString.split(' ');
    const firstWord = stringToArray.shift();
    const restOfString = stringToArray.join(' ');

    return <div className="background">
        <img src={backgroundImage} alt='Background' />
        <div className='background-text'>
            <div className='page-title'>
                <span className='special'> {firstWord} </span>
                <span>{restOfString}</span>
            </div>
            <div className='page-name'>
                <span>{pageName}</span>
            </div>
        </div>
    </div>
};

export default Background;