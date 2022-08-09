import React from 'react';
import styles from './LoginOrRegister.module.css';
import { loginFailure, loginSuccess } from '../../globalFunctions/Store/actions';
import api from '../../api';

import Background from '../../components/Background/Background';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const LoginOrRegister = () => {
    return <div >
        <Background titleString="Welcome to Ave" pageName="Sign in or register" />
        <div className={styles["content-container"]}>
            <Login {...{
                loginCall: api.logIn,
                storeCallSuccess: loginSuccess,
                storeCallFailure: loginFailure
            }} />
            <div className={styles["separator"]}>
            </div>
            <Register {...{
                loginCall: api.logIn,
                storeCallSuccess: loginSuccess,
            }} />
        </div>
    </div>
};

export default LoginOrRegister;