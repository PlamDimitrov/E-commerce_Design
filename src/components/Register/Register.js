import React from 'react';
import styles from './Register.module.css';

const Register = () => {
    return <div className={styles["register"]}>
        <form >
            <h1 className={styles["title"]}>Sign in</h1>
            <div className={styles["input-container"]}>
                <input className={`${styles["email"]} ${styles["error"]}`} type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input className={styles["password"]} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles["input-container"]}>
                <input className={styles["password"]} type="password" required placeholder="Confirm password.." autoComplete="off" />
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