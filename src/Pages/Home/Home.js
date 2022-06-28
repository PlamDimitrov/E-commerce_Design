import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/img/home-page/background-home.png';



const Home = () => {
    return <div className={styles["home-page"]}>
        <div className={styles["top-image"]}>
            <img src={backgroundImg} className={styles["background"]} alt="background" />
            <Link className={styles['shop_button']} to="/">Shop men's collection</Link>
        </div>
        <div className={styles["separator"]} >
        </div>
    </div >
};

export default Home;