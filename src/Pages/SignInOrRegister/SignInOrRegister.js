import React from 'react';
import styles from './SignInOrRegister.module.css';

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
        <div className={styles["content-container"]}>
            <SingIn />
            <div className={styles["separator"]}>
            </div>
            <Register />
        </div>
        <Footer />
    </div>
};

export default SignInOrRegister;