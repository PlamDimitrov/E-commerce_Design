import React from 'react';

import styles from './NavMenu.module.css';

const NavMenu = (props) => {
    const processMenuItem = (item, index) => {
        return <li key={index} className={styles["item"]}>
            <a href="./">{item.title}
                {item.sub.length > 0 ? <i className="fa-solid fa-angle-down"></i> : <></>}
            </a>
            {item.sub.length > 0 ? <div className={styles["dropdown"]}>
                {item.sub.map((category, categoryIndex) => {
                    return <div key={categoryIndex} className={styles["dropdown-categories"]}>
                        <h1 className={styles["dropdown-title"]}>{category.name}</h1>
                        {category.links.map((link, linkIndex) => {
                            return <a key={linkIndex} href={link.address} className={styles["dropdown-item"]}>{link.text}</a>
                        })}
                    </div>
                })}
            </div> : <></>}
        </li>
    };

    return <nav className={styles["nav-menu"]}>
        <ul className={styles["menu"]}>
            {props.items.map((item, index) => processMenuItem(item, index))}
        </ul>
    </nav>
};

export default NavMenu;