import React from 'react';
import styles from './SignInAdmin.module.css';
import { loginAdmin } from '../../globalFunctions/Store/actions';

import Background from '../../components/Background/Background';
import SingIn from '../../components/SingIn/SingIn';

const SignInAdmin = () => {
    return <div >
        <Background titleString="Welcome to Ave" pageName="Sign in or register" />
        <div className={styles["content-container"]}>
            <SingIn call={loginAdmin} />
        </div>
    </div>
};

export default SignInAdmin;