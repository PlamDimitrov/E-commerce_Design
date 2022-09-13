import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';
import { MenuContext } from '../../globalFunctions/Store/MenuStore';

import NavMenu from '../NavMenu/NavMenu';

const Navigation = () => {
    const { mainMenu } = useContext(MenuContext);
    return <div className={styles["navigation"]}>
        <div className={styles["brand"]}>
            <Link to="/">
                <h1>Avenue</h1>
                <h1>Fashion</h1>
            </Link>
        </div>
        <div className={styles["main-menu"]}>
            {mainMenu.length > 0 ? <NavMenu items={mainMenu} /> : <></>}
        </div>
        <div className={styles["search"]}>
            <input defaultValue="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};

export default Navigation;