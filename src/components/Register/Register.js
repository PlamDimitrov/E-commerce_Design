import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";
import api from '../../api';
import styles from './Register.module.css';

const Register = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(state.error);

    const loginCall = props.call;

    let userNameInput = useRef(null);
    let emailInput = useRef(null);
    let passwordInput = useRef(null);
    let passwordRepeateInput = useRef(null);

    const getUserName = () => {
        setUserName(userNameInput.current.value);
    };

    const getEmail = () => {
        setUserName(emailInput.current.value);
    };

    const getPassword = () => {
        setPassword(passwordInput.current.value);
    };

    const getPasswordConformation = () => {
        setPassword(passwordRepeateInput.current.value);
    };

    async function submit(event) {
        event.preventDefault();
        const user = {
            userName: userName,
            password: password
        };
        try {
            await loginCall(user);

        } catch (error) {
            console.log(`Login error: ${error}`);
        }
    };


    const redirectAfterRegister = (condition) => {
        if (condition) {
            navigate("/");
        }
    }

    useEffect(() => {
        userNameInput.current = document.querySelector(`.${styles["user-name"]}`);
        emailInput.current = document.querySelector(`.${styles["email"]}`);
        passwordInput.current = document.querySelector(`.${styles["password"]}`);
        passwordRepeateInput.current = document.querySelector(`.${styles["repeate"]}`);
        setError(state.error);
        redirectAfterRegister(error);
    }, [state])

    return <div className={styles["register"]}>
        {state.error ? <p>Wrong username or password</p> : ""}
        <form onSubmit={submit}>
            <h1 className={styles["title"]}>Register</h1>
            <div className={styles["input-container"]}>
                <input onChange={getUserName} className={`${styles["user-name"]} ${state.error ? styles["error"] : ""}`} required placeholder="Your Username.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getEmail} className={`${styles["email"]} ${state.error ? styles["error"] : ""}`} type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getPassword} className={styles["password"]} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getPasswordConformation} className={`${styles["password"]} "repeate"`} type="password" required placeholder="Confirm password.." autoComplete="off" />
            </div>
            <div>
                <div className={styles["sign-up-offer-container"]}>
                    <input className={`${styles["sign-up-offer"]} ${styles["enlarge"]}`} type="checkbox" />
                    <p className={styles["sign-up-offer"]}>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>
                </div>
            </div>
            <div className={styles["action-bar"]}>
                <button className={styles["sign-in_button"]}>Create account</button>
                <p className={styles["privacy-policy"]}>By clicking ‘Create Account’, you agree to our
                    <a className={styles["privacy-policy_link"]} href='./'> Privacy Policy <i className="fa-solid fa-right-long"></i></a>
                </p>
            </div>
        </form>
    </div>
};

export default Register;