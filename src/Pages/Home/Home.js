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
                    <div className={`${styles["product"]} ${styles["small"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["details"]}>
                                <h1 className={styles["title"]}>Womens burnt orange casual tee
                                    <span className={styles["price"]}>
                                        29.95
                                    </span>
                                </h1>
                                <span className={styles["description"]}>
                                    Classic casual t-shirt for women on the move. 100% cotton.
                                </span>
                            </div>
                            <div className={styles["action-section"]}>
                                <div className={styles["hover-icon"]}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className={styles["hover-icon"]}>
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                                <div className={styles["hover-icon"]}>
                                    <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["product"]} ${styles["small"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["hover-icon"]}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["product"]} ${styles["large"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["hover-icon"]}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["col"]}`}>
                    <div className={`${styles["product"]} ${styles["large"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["hover-icon"]}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["product"]} ${styles["small"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["hover-icon"]}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["product"]} ${styles["small"]}`}>
                        <img src={backgroundImg} className={styles["product-image"]} alt="background" />
                        <div className={styles["product-pricing"]}>
                            <span className={`${styles["price"]} ${styles["old"]}`}>107€</span>
                            <span className={`${styles["price"]}`}>99€</span>
                        </div>
                        <div className={`${styles["info"]}`}>
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className={`${styles["thumbnails"]}`}>
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                            <img src={backgroundImg} className={styles["thumbnail-image"]} alt="thumbnail" />
                        </div>
                        <div className={styles["product-section"]}>
                            <div className={styles["hover-icon"]}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className={styles["hover-icon"]}>
                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
};

export default Home;