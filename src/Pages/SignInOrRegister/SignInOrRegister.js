import React from 'react';
import styles from './SignInOrRegister.module.css';

import Background from '../../components/Background/Background';
import SingIn from '../../components/SingIn/SingIn';
import Register from '../../components/Register/Register';

const SignInOrRegister = () => {
    return <div >
        <Background />
        <div className={styles["content-container"]}>
            <SingIn />
            <div className={styles["separator"]}>
            </div>
            <Register />
        </div>
    </div>
};

export default SignInOrRegister;