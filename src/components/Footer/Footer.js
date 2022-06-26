import React from 'react';

import styles from './Footer.module.css';
import globalStyles from '../../index.module.css';

const Footer = () => {
    return <div className={styles["footer"]}>
        <div className={`${globalStyles["content"]} ${styles["footer-body"]}`}>
            <div className={styles["footer-content"]}>
                <div className={styles["section"]}>
                    <h2 className={styles["section-title"]}>Information</h2>
                    <div className={styles["section-content"]}>
                        <a className={styles["section-component"]} href="./">The brand</a>
                        <a className={styles["section-component"]} href="./">Local stores</a>
                        <a className={styles["section-component"]} href="./">Custemer service</a>
                        <a className={styles["section-component"]} href="./">Privacy & cookies</a>
                        <a className={styles["section-component"]} href="./">Site map</a>
                    </div>
                </div>
                <div className={styles["section"]}>
                    <h2 className={styles["section-title"]}>Why Buy From Us</h2>
                    <div className={styles["section-content"]}>
                        <a className={styles["section-component"]} href="./">Shiping & returns</a>
                        <a className={styles["section-component"]} href="./">Secure shoping</a>
                        <a className={styles["section-component"]} href="./">Testimonials</a>
                        <a className={styles["section-component"]} href="./">Award winning</a>
                        <a className={styles["section-component"]} href="./">Ethical treding</a>
                    </div>
                </div>
                <div className={styles["section"]}>
                    <h2 className={styles["section-title"]}>Why Buy From Us</h2>
                    <div className={styles["section-content"]}>
                        <a className={styles["section-component"]} href="./">Shiping & returns</a>
                        <a className={styles["section-component"]} href="./">Secure shoping</a>
                        <a className={styles["section-component"]} href="./">Testimonials</a>
                        <a className={styles["section-component"]} href="./">Award winning</a>
                        <a className={styles["section-component"]} href="./">Ethical treding</a>
                    </div>
                </div>
                <div className={styles["section"]}>
                    <h2 className={styles["section-title"]}>Why Buy From Us</h2>
                    <div className={styles["section-content"]}>
                        <a className={styles["section-component"]} href="./">Shiping & returns</a>
                        <a className={styles["section-component"]} href="./">Secure shoping</a>
                        <a className={styles["section-component"]} href="./">Testimonials</a>
                        <a className={styles["section-component"]} href="./">Award winning</a>
                        <a className={styles["section-component"]} href="./">Ethical treding</a>
                    </div>
                </div>
                <div className={styles["section"]}>
                    <h2 className={styles["section-title"]}>Why Buy From Us</h2>
                    <div className={styles["section-content"]}>
                        <a className={styles["section-component"]} href="./">Shiping & returns</a>
                        <a className={styles["section-component"]} href="./">Secure shoping</a>
                        <a className={styles["section-component"]} href="./">Testimonials</a>
                        <a className={styles["section-component"]} href="./">Award winning</a>
                        <a className={styles["section-component"]} href="./">Ethical treding</a>
                    </div>
                </div>
            </div>
            <div className={styles["footer-banners"]}>
                <div className={`${styles["footer-info"]} ${styles["banner"]}`}>
                    <h1>Award winner</h1>
                    <h1>Fashion awards 2022</h1>
                </div>
                <div className={`${styles["footer-social-network"]} ${styles["banner"]}`}>
                    <a href="./">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="./">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="./">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="./">
                        <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles["footer-copyright-section"]}>
            <div className={`${globalStyles["content"]} ${styles["footer-content-body"]}`}>
                <a href="./">© 2022 PlamDimitrov</a>
                <a href="RobbyDesign.com">Design by RobbyDesign.com</a>
                <a href="./">Dev by PlamDimitrov</a>
            </div>
        </div>
    </div>
};

export default Footer;