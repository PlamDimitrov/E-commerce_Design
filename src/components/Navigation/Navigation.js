import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import NavMenu from '../NavMenu/NavMenu';

const Navigation = () => {

    // To replace with Database call
    const items = [
        {
            title: "Mans",
            link: "/",
            sub: [
                {
                    name: "Casuals",
                    links: [
                        {
                            text: "Jackets",
                            address: "/",
                        },
                        {
                            text: "Hoodies & Sweatshirts",
                            address: "",
                        },
                        {
                            text: "Polo Shirts",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "Trousers & Chinos",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "T-Shirts",
                            address: "/",
                        },
                    ],
                }
            ]
        },
        {
            title: "Womens",
            link: "/",
            sub: [
                {
                    name: "Casuals womens",
                    links: [
                        {
                            text: "Jackets",
                            address: "/",
                        },
                        {
                            text: "Hoodies & Sweatshirts",
                            address: "",
                        },
                        {
                            text: "Polo Shirts",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "Trousers & Chinos",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "T-Shirts",
                            address: "/",
                        },
                    ]
                },
                {
                    name: "Casuals",
                    links: [
                        {
                            text: "Jackets",
                            address: "/",
                        },
                        {
                            text: "Hoodies & Sweatshirts",
                            address: "",
                        },
                        {
                            text: "Polo Shirts",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "Trousers & Chinos",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "T-Shirts",
                            address: "/",
                        },
                    ]
                }
            ]
        },
        {
            title: "The brand",
            link: "/",
            sub: []
        },
        {
            title: "Locale store",
            link: "/",
            sub: []
        },
        {
            title: "Look book",
            link: "/",
            sub: [
                {
                    name: "Casuals",
                    links: [
                        {
                            text: "Jackets",
                            address: "/",
                        },
                        {
                            text: "Hoodies & Sweatshirts",
                            address: "",
                        },
                        {
                            text: "Polo Shirts",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "Trousers & Chinos",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "T-Shirts",
                            address: "/",
                        },
                    ]
                },
                {
                    name: "Casuals",
                    links: [
                        {
                            text: "Jackets",
                            address: "/",
                        },
                        {
                            text: "Hoodies & Sweatshirts",
                            address: "",
                        },
                        {
                            text: "Polo Shirts",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "Trousers & Chinos",
                            address: "/",
                        },
                        {
                            text: "Sportswear",
                            address: "/",
                        },
                        {
                            text: "T-Shirts",
                            address: "/",
                        },
                    ]
                }
            ]
        },
    ]

    // /To replace with Database call

    return <div className={styles["navigation"]}>
        <div className={styles["brand"]}>
            <Link to="/">
                <h1>Avenue</h1>
                <h1>Fashion</h1>
            </Link>
        </div>
        <NavMenu items={items} />
        <div className={styles["search"]}>
            <input defaultValue="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};

export default Navigation;