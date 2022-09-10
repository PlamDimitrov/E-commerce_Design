import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';
import { MenuContext } from '../../globalFunctions/Store/MenuStore';

import NavMenu from '../NavMenu/NavMenu';
import api from '../../api';

const Navigation = () => {
    const { mainMenu, setMainMenu } = useContext(MenuContext);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        console.log("from nav", mainMenu);
    }, [mainMenu])

    useEffect(() => {
        api.getAllMenus()
            .then(res => res.json())
            .then(res => {
                setMenu(res)
                // console.log("menu", menu);
                // console.log("state", mainMenu);
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
            {menu.length > 0 ? <NavMenu items={mainMenu} /> : <></>}
        </div>
        <div className={styles["search"]}>
            <input defaultValue="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};

export default Navigation;