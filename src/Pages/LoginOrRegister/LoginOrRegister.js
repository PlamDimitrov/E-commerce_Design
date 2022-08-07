import React from 'react';
import styles from './LoginOrRegister.module.css';

import Background from '../../components/Background/Background';
import SingIn from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const LoginOrRegister = () => {
    return <div >
        <Background titleString="Welcome to Ave" pageName="Sign in or register" />
        <div className={styles["content-container"]}>
            <SingIn />
            <div className={styles["separator"]}>
            </div>
            <Register />
        </div>
    </div>
};

export default LoginOrRegister;