import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";
import handleError from "../../globalFunctions/serverErrors";
import styles from './Login.module.css';

import getDataFromForm from '../../globalFunctions/formsHanler';

const Login = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const loginCall = props.loginCall;
    const storeCallSuccess = props.storeCallSuccess;
    const storeCallFailure = props.storeCallFailure;

    let userNameInput = useRef(null);
    let passwordInput = useRef(null);

    const getUserName = () => {
        setUserName(userNameInput.current.value);
    };

    const getPassword = () => {
        setPassword(passwordInput.current.value);
    };

    const submit = (event) => {
        event.preventDefault();
        const user = {
            userName: userName,
            password: password
        };
        loginCall(user)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setError(null);
                    navigate("/");
                    return res.json();
                } else {
                    const errorMessage = handleError(res.status);
                    setError(errorMessage);
                    dispatch(storeCallFailure(res));
                }
            })
            .then(res => {
                dispatch(storeCallSuccess(res));
            })
            .catch(err => console.log(`LoginError: ${err}`))
    };

    useEffect(() => {
        userNameInput.current = document.querySelector(`.${styles["user-name"]}`);
        passwordInput.current = document.querySelector(`.${styles["password"]}`);
    }, [state])

    return <div className={styles["sign-in"]}>
        {error ? <p>{error}</p> : ""}
        <form onSubmit={submit}>
            <h1 className={styles['title']}>Sign in</h1>
            <div className={styles['input-container']}>
                <input onChange={getUserName} className={`${styles["user-name"]} ${state.error ? styles["error"] : ""}`} required placeholder="Your Username.." autoComplete="off" />
            </div>
            <div className={styles['input-container']}>
                <input onChange={getPassword} className={`${styles['password']} ${state.error ? styles["error"] : ""}`} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles['action-bar']}>
                <button className={styles['sign-in_button']}>Sign In</button>
                <a className={styles['sign-in_link']} href='./'> Forgot your Password <i className="fa-solid fa-right-long"></i></a>
            </div>
        </form>
    </div>
};

export default Login;