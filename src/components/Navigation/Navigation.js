import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return <div className={styles["navigation"]}>
        <div className={styles["brand"]}>
            <a href="./">
                <h1>Avenue</h1>
                <h1>Fassion</h1>
            </a>
        </div>
        <nav >
            <ul className={styles["menu"]}>
                <li className={styles["item"]}>
                    <a href="./">Mans
                        <i className="fa-solid fa-angle-down"></i>
                    </a>
                    <div className={styles["dropdown"]}>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <a href="./" className={styles["dropdown-item"]}>Jackets</a>
                            <a href="./" className={styles["dropdown-item"]}>Hoodies & Sweatshirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Polo Shirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>Trousers & Chinos</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>T-Shirts</a>
                        </div>
                    </div>
                </li>
                <li className={styles["item"]}>
                    <a href="./">Womens
                        <i className="fa-solid fa-angle-down"></i>
                    </a>
                    <div className={styles["dropdown"]}>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <a href="./" className={styles["dropdown-item"]}>Jackets</a>
                            <a href="./" className={styles["dropdown-item"]}>Hoodies & Sweatshirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Polo Shirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>Trousers & Chinos</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>T-Shirts</a>
                        </div>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <a href="./" className={styles["dropdown-item"]}>Jackets</a>
                            <a href="./" className={styles["dropdown-item"]}>Hoodies & Sweatshirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Polo Shirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>Trousers & Chinos</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>T-Shirts</a>
                        </div>
                    </div>
                </li>
                <li className={styles["item"]}>
                    <a href="./">The brand</a>
                </li>
                <li className={styles["item"]}>
                    <a href="./">Locale store</a>
                </li>
                <li className={styles["item"]}>
                    <a href="./">Look book
                        <i className="fa-solid fa-angle-down"></i>
                    </a>
                    <div className={styles["dropdown"]}>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <a href="./" className={styles["dropdown-item"]}>Jackets</a>
                            <a href="./" className={styles["dropdown-item"]}>Hoodies & Sweatshirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Polo Shirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>Trousers & Chinos</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>T-Shirts</a>
                        </div>
                        <div className={styles["dropdown-categories"]}>
                            <h1 className={styles["dropdown-title"]}>Casuals</h1>
                            <a href="./" className={styles["dropdown-item"]}>Jackets</a>
                            <a href="./" className={styles["dropdown-item"]}>Hoodies & Sweatshirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Polo Shirts</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>Trousers & Chinos</a>
                            <a href="./" className={styles["dropdown-item"]}>Sportswear</a>
                            <a href="./" className={styles["dropdown-item"]}>T-Shirts</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <div className={styles["search"]}>
            <input defaultValue="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};

export default Navigation;