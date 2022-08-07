import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { StoreContext } from "../../globalFunctions/Store/Store";

import getDataFromForm from '../../globalFunctions/formsHanler';

const Login = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(state.error);


    const loginCall = props.call;

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
        try {
            dispatch(loginCall(user));

        } catch (error) {
            console.log(`Login error: ${error}`);
        }
    };

    const redirectAfterLogin = (condition) => {
        if (condition) {
            navigate("/");
        }
    }

    useEffect(() => {
        userNameInput.current = document.querySelector(`.${styles["user-name"]}`);
        passwordInput.current = document.querySelector(`.${styles["password"]}`);
        setError(state.error);
        redirectAfterLogin(error);
    }, [state])

    return <div className={styles["sign-in"]}>
        <form onSubmit={submit}>
            <h1 className={styles['title']}>Sign in</h1>
            <div className={styles['input-container']}>
                {state.error ? <p>Wrong username or password</p> : ""}
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