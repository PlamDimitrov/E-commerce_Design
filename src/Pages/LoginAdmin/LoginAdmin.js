import React from 'react';
import styles from './LoginAdmin.module.css';
import { loginAdmin } from '../../globalFunctions/Store/actions';

import Background from '../../components/Background/Background';
import Login from '../../components/Login/Login';

const LoginAdmin = () => {
    return <div >
        <Background titleString="Welcome to Ave" pageName="Sign in or register" />
        <div className={styles["content-container"]}>
            <Login call={loginAdmin} />
        </div>
    </div>
};

export default LoginAdmin;