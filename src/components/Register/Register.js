import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../globalFunctions/Store/Store";
import handleError from "../../globalFunctions/serverErrors";
import styles from './Register.module.css';

import spinner from '../../assets/spinner.gif';

const Register = (props) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(StoreContext);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConformation, setPasswordConformation] = useState(null);
    const [email, setEmail] = useState(null);
    const [registererror, setRegistererror] = useState("");
    const [userInUse, setUserInUse] = useState(false);
    const [emailInUse, setemailInUse] = useState(false);
    const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
    const [isloadingRegister, setIsLoadingRegister] = useState(false);

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
        if (passwordConformation === password) {
            setPasswordsDontMatch(false);
            setRegistererror(false);
            return true;
        } else {
            setPasswordsDontMatch(true);
            setRegistererror("Passwords don't match!");
            return false;
        }
    }

    const submit = (event) => {
        event.preventDefault();
        const user = {
            userName: userName,
            password: password,
            email: email
        };
        setIsLoadingRegister(true);
        if (validate()) {
            registerCall(user)
                .then(res => {
                    if (res.status >= 200 && res.status < 300) {
                        loginCall(user);
                        setRegistererror("");
                        setIsLoadingRegister(false);
                        navigate("/");
                    }
                    return res.json();
                })
                .then(res => {
                    setIsLoadingRegister(false);
                    if (res.errorCode) {
                        const errorMessage = handleError(res);
                        if (errorMessage.includes("Username")) {
                            setUserInUse(true);
                        }
                        if (errorMessage.includes("Email")) {
                            setemailInUse(true);
                        }
                        setRegistererror(errorMessage);
                    } else {
                        dispatch(storeCallSuccess(res));
                    }
                })
                .catch(err => {
                    setIsLoadingRegister(false);
                    setRegistererror("Connection error, please try again later!")
                    console.log(`LoginError: ${err}`)
                })
        } else {
            return;
        }
    };
    useEffect(() => {
        validate();
    }, [password, passwordConformation]);

    useEffect(() => {
        userNameInput.current = document.querySelector(`.${styles["user-name"]}`);
        emailInput.current = document.querySelector(`.${styles["email"]}`);
        passwordInput.current = document.querySelector(`.${styles["password"]}`);
        passwordRepeateInput.current = document.querySelector(`.repeate`);
        validate();
    }, [state]);

    return <div className={styles["register"]}>
        {registererror ? <p>{registererror}</p> : ""}
        <form onSubmit={submit}>
            <h1 className={styles["title"]}>
                Register
                {isloadingRegister ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
            </h1>
            <div className={styles["input-container"]}>
                <input onChange={getUserName} className={`${styles["user-name"]} ${userInUse ? styles["error"] : ""}`} required placeholder="Your Username.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getEmail} className={`${styles["email"]} ${emailInUse ? styles["error"] : ""}`} type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getPassword} className={`${styles["password"]} ${passwordsDontMatch ? styles["error"] : ""}`} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input onChange={getPasswordConformation} className={`${styles["password"]} repeate ${passwordsDontMatch ? styles["error"] : ""}`} type="password" required placeholder="Confirm password.." autoComplete="off" />
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