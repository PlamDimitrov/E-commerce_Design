import React from 'react';
import styles from './Overview.module.css';
import { Link } from 'react-router-dom';

import Product from '../Product/Product';

const Overview = () => {
    return <div className={styles["products-overview"]} >
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
                <Product size="small" />
                <Product size="small" />
                <Product size="large" />
            </div>
            <div className={`${styles["col"]}`}>
                <Product size="large" />
                <Product size="small" />
                <Product size="small" />
            </div>
        </div>
    </div>
};

export default Overview;