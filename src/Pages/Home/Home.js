import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/img/home-page/background-home.png';
import Category from '../../components/Category/Category';
import Overview from '../../components/Overview/Overview';



const Home = () => {
    return <div className={`${styles["home-page"]}`}>
        <div className={styles["top-image"]}>
            <img src={backgroundImg} className={styles["background"]} alt="background" />
            <Link className={styles['shop_button']} to="/shop">Shop men's collection</Link>
        </div>
        <Overview />
        <div className={`${styles["categories"]}`}>
            <Category />
            <Category />
            <Category />
        </div>
    </div >
};

export default Home;