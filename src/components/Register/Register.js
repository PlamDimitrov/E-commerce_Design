import React from 'react';
import './Register.css';

const Register = () => {
    return <div className="register">
        <form >
            <h1 className='title'>Sign in</h1>
            <div className='input-container'>
                <input className='email error' type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className='input-container'>
                <input className='password' type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className='input-container'>
                <input className='password' type="password" required placeholder="Confirm password.." autoComplete="off" />
            </div>
            <div>
                <div className='sign-up-offer-container'>
                    <input className='sign-up-offer enlarge' type="checkbox" />
                    <p className='sign-up-offer'>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>
                </div>
            </div>
            <div className='action-bar'>
                <button className='sign-in_button'>Create account</button>
                <p className='privacy-policy'>By clicking ‘Create Account’, you agree to our
                    <a className='privacy-policy_link' href='./'> Privacy Policy <i className="fa-solid fa-right-long"></i></a>
                </p>
            </div>
        </form>
    </div>
};

export default Register;