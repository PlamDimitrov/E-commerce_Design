import React from 'react';
import styles from './SingIn.module.css';

const SingIn = () => {
    return <div className={styles["sign-in"]}>
        <form >
            <h1 className={styles['title']}>Sign in</h1>
            <div className={styles['input-container']}>
                <input className={`${styles["email"]} ${styles["error"]}`} type="email" required placeholder="Your Email.." autoComplete="off" />
            </div>
            <div className={styles['input-container']}>
                <input className={styles['password']} type="password" required placeholder="Your password.." autoComplete="off" />
            </div>
            <div className={styles['action-bar']}>
                <button className={styles['sign-in_button']}>Sign In</button>
                <a className={styles['sign-in_link']} href='./'> Forgot your Password <i className="fa-solid fa-right-long"></i></a>
            </div>
        </form>
    </div>
};

export default SingIn;