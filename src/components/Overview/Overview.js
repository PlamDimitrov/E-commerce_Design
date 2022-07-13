import React from 'react';
import styles from './Overview.module.css';
import { Link } from 'react-router-dom';

import PromotedProduct from '../../components/PromotedProduct/PromotedProduct';

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
};

export default Overview;