import React from 'react';
import './SignInOrRegister.css';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Background from '../../components/Background/Background';
import SingIn from '../../components/SingIn/SingIn';
import Footer from '../../components/Footer/Footer';
import Register from '../../components/Register/Register';

const SignInOrRegister = () => {
    return <div >
        <Header />
        <Navigation />
        <Background />
        <div className='content-container'>
            <SingIn />
            <div className="separator">
            </div>
            <Register />
        </div>
        <Footer />
    </div>
};

export default SignInOrRegister;