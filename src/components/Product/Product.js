import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';

import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/img/home-page/background-home.png';


const Product = (props) => {

    const [size, setSize] = useState(props.size);

    useEffect(() => {
        setSize(props.size)
    }, [props.size])

    return <div className={`${styles["product"]} ${styles[size]}`}>
        <Link to={"/product-view"}>
            <img src={backgroundImg} className={styles["product-image"]} alt="background" />
            <div className={`${styles["info"]}`}>
                <i className="fa-solid fa-circle-info"></i>
            </div>
        </Link>
        <div className={styles["product-pricing"]}>
            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
            <span className={`${styles["price"]}`}>99€</span>
        </div>
        <div className={`${styles["thumbnails"]}`}>
            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
        </div>
        <div className={styles["description"]}>
            <h1>Womens burnt orange casual tee  £29.95</h1>
            <span>
                Classic casual t-shirt for women on the move. 100% cotton.
            </span>
            <span>
                100% cotton.
            </span>
            <span>
                A hard-wearing sports t-shirt with microvent technology.
            </span>
            <div className={styles["action-section"]}>
                <div className={styles["hover-icon"]}>
                    <i className={`fa-solid fa-cart-shopping ${styles["cart"]}`}></i>
                </div>
                <div className={styles["hover-icon"]}>
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div className={styles["hover-icon"]}>
                    <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
                </div>
            </div>
        </div>
    </div>
};

export default Product;