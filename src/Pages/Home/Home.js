import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

import PromotedProduct from '../../components/PromotedProduct/PromotedProduct';

import backgroundImg from '../../assets/img/home-page/background-home.png';



const Home = () => {
    return <div className={styles["home-page"]}>
        <div className={styles["top-image"]}>
            <img src={backgroundImg} className={styles["background"]} alt="background" />
            <Link className={styles['shop_button']} to="/">Shop men's collection</Link>
        </div>
        <div className={styles["products-overview"]} >
            <div className={styles["sub-menu"]}>
                <nav>
                    <ul className={styles["menu"]}>
                        <li className={styles["item"]}>
                            <Link to="/">Popular</Link>
                        </li>
                        <li className={styles["item"]}>
                            <Link to="/">New Arrivals</Link>
                        </li>
                        <li className={styles["item"]}>
                            <Link to="/">Best Sellers</Link>
                        </li>
                        <li className={styles["item"]}>
                            <Link to="/">Special offers</Link>
                        </li>
                        <li className={styles["item"]}>
                            <Link to="/">Comming soon</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles["products"]}>
                <div className={`${styles["col"]}`}>
                    <PromotedProduct size="small" />
                    <PromotedProduct size="small" />
                    <PromotedProduct size="large" />
                </div>
                <div className={`${styles["col"]}`}>
                    <PromotedProduct size="large" />
                    <PromotedProduct size="small" />
                    <PromotedProduct size="small" />
                </div>
            </div>
        </div>
    </div >
};

export default Home;