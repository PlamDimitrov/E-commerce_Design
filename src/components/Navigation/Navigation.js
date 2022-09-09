import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import NavMenu from '../NavMenu/NavMenu';
import api from '../../api';

const Navigation = () => {
    const [menu, setMenu] = useState([]);

    // To replace with Database call
    const items = [
        {
            title: "Mans",
            address: "/",
            subMenus: [
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
            address: "/",
            subMenus: [
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
            address: "/",
            subMenus: []
        },
        {
            title: "Locale store",
            address: "/",
            subMenus: []
        },
        {
            title: "Look book",
            address: "/",
            subMenus: [
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

    useEffect(() => {
        api.getAllMenus()
            .then(res => res.json())
            .then(res => {
                setMenu(res)
                console.log(menu);
            })
            .catch(err => console.log(err))
    }, [])

    return <div className={styles["navigation"]}>
        <div className={styles["brand"]}>
            <Link to="/">
                <h1>Avenue</h1>
                <h1>Fashion</h1>
            </Link>
        </div>
        <div className={styles["main-menu"]}>
            {menu.length > 0 ? <NavMenu items={menu} /> : <></>}
        </div>
        <div className={styles["search"]}>
            <input defaultValue="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};

export default Navigation;