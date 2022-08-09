import React from 'react';
import styles from './LoginAdmin.module.css';
import { loginFailureAdmin, loginSuccessAdmin } from '../../globalFunctions/Store/actions';
import api from '../../api';

import Background from '../../components/Background/Background';
import Login from '../../components/Login/Login';

const LoginAdmin = () => {
    return <div >
        <Background titleString="Welcome to Ave" pageName="Sign in or register" />
        <div className={styles["content-container"]}>
            <Login {...{
                loginCall: api.logInAdmin,
                storeCallSuccess: loginSuccessAdmin,
                storeCallFailure: loginFailureAdmin
            }} />
        </div>
    </div>
};

export default LoginAdmin;