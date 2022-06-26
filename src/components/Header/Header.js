import React from 'react';
import styles from './Header.module.css';
import globalStyles from '../../index.module.css';

import product from '../../assets/img/product.png';

const Header = () => {
    return <div className={styles["header"]}>
        <div className={globalStyles["content"]}>
            <div className={styles["header-item-container"]}>
                <a className={styles["header-item"]} href="./">Register</a>
                <a className={styles["header-item"]} href="./">Sign in</a>
                <div className={styles["shoping-cart"]}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>empty</span>
                    <i className="fa-solid fa-chevron-down"></i>
                    <div className={styles["dropdown"]}>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <img src={product} alt="product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Header;