import React from 'react';
import styles from './Category.module.css';

import { Link } from 'react-router-dom';

import categoryImg from '../../assets/img/category.png';


const Category = () => {
    return <div className={`${styles["category"]}`}>
        <img className={`${styles["category-image"]}`} src={categoryImg} alt="category background" />
        <div className={`${styles["category-content"]}`}>
            <h1 className={styles["title"]}><span className={styles["special"]}>men’s</span> lookbook</h1>
            <span className={styles["description"]}>Lorem ipsum dolor sit amet eras facilisis
                consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
                Elementum metus facilisis ut phasellu.
            </span>
            <Link className={styles["view-now"]} to="/">View now</Link>
        </div>
    </div>
};

export default Category;