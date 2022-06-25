import React from 'react';
import './SingIn.css';

const SingIn = () => {
    return <div className="sign-in">
        <form >
            <h1 className='title'>Sign in</h1>
            <div className='input-container'>
                <input className='email error' type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className='input-container'>
                <input className='password' type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className='action-bar'>
                <button className='sign-in_button'>Sign In</button>
                <a className='sign-in_link' href='./'> Forgot your Password <i className="fa-solid fa-right-long"></i></a>
            </div>
        </form>
    </div>
};

export default SingIn;