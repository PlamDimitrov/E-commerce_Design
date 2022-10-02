import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";
import handleError from "../../globalFunctions/serverErrors";
import styles from './Login.module.css';

import spinner from '../../assets/spinner.gif';

const Login = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);


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
            UserName: userName,
            Password: password
        };
        setIsLoading(true);
        loginCall(user)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setError(null);
                    navigate("/");
                }
                return res.json();
            })
            .then(res => {
                setIsLoading(false);
                if (res.errorCode) {
                    const errorMessage = handleError(res);
                    setError(errorMessage);
                    dispatch(storeCallFailure(res));
                } else {
                    dispatch(storeCallSuccess(res));
                }
            })
            .catch(err => {
                setIsLoading(false);
                setError("Connection error, please try again later!")
                console.log(`LoginError: ${err}`)
            })
    };

    useEffect(() => {
        userNameInput.current = document.querySelector(`.${styles["user-name"]}`);
        passwordInput.current = document.querySelector(`.${styles["password"]}`);
    }, [state])

    return <div className={styles["sign-in"]}>
        {error ? <p>{error}</p> : ""}
        <form onSubmit={submit}>
            <h1 className={styles['title']}>
                Sign in
                {isloading ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
            </h1>
            <div className={styles['input-container']}>
                <input onChange={getUserName} className={`${styles["user-name"]} ${error ? styles["error"] : ""}`} required placeholder="Your Username.." autoComplete="off" />
            </div>
            <div className={styles['input-container']}>
                <input onChange={getPassword} className={`${styles['password']} ${error ? styles["error"] : ""}`} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles['action-bar']}>
                <button className={styles['sign-in_button']}>
                    Sign In
                </button>
                <a className={styles['sign-in_link']} href='./'> Forgot your Password <i className="fa-solid fa-right-long"></i></a>
            </div>
        </form>
    </div>
};

export default Login;