import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";
import handleError from "../../globalFunctions/serverErrors";
import styles from './Register.module.css';

const Register = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConformation, setPasswordConformation] = useState(null);
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(null);

    const registerCall = props.registerCall;
    const loginCall = props.loginCall;
    const storeCallSuccess = props.storeCallSuccess;

    let userNameInput = useRef(null);
    let emailInput = useRef(null);
    let passwordInput = useRef(null);
    let passwordRepeateInput = useRef(null);

    const getUserName = () => {
        setUserName(userNameInput.current.value);
    };

    const getEmail = () => {
        setEmail(emailInput.current.value);
    };

    const getPassword = () => {
        setPassword(passwordInput.current.value);
    };

    const getPasswordConformation = () => {
        setPasswordConformation(passwordRepeateInput.current.value);
    };

    const validate = (event) => {
        event.preventDefault();
        console.log(passwordConformation === password);
        if (passwordConformation === password) {
            setError(null);
            submit();
        } else {
            setError("Passwords don't match!");
        }
    }

    const submit = () => {
        const user = {
            userName: userName,
            password: password,
            email: email
        };
        registerCall(user)
            .then(res => {
                console.log(user);
                if (res.status >= 200 && res.status < 300) {
                    loginCall(user);
                    setError(null);
                    navigate("/");
                    return res.json();
                } else {
                    const errorMessage = handleError(res.status);
                    setError(errorMessage);
                }
            })
            .then(res => {
                dispatch(storeCallSuccess(res));
            })
            .catch(err => console.log(`LoginError: ${err}`));
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
        passwordRepeateInput.current = document.querySelector(`.repeate`);
        setError(state.error);
        redirectAfterRegister(error);
    }, [state])

    return <div className={styles["register"]}>
        {error ? <p>{error}</p> : ""}
        <form onSubmit={validate}>
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
                <input onChange={getPasswordConformation} className={`${styles["password"]} repeate`} type="password" required placeholder="Confirm password.." autoComplete="off" />
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