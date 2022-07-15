import React, { useEffect, useRef } from 'react';
import styles from './ProductSubTabs.module.css';

const ProductSubTabs = (props) => {

    const activate = (e) => {
        const allTabs = document.querySelectorAll(`.${styles["tab"]}`);
        allTabs.forEach(node => node.className = `${styles["tab"]}`);
        e.target.className = `${styles["tab"]} ${styles["active"]}`
    }

    return <div className={styles["product-subtabs"]}>
        <div className={styles["tabs"]}>
            <span onClick={activate} className={styles["tab"]}>description</span>
            <span onClick={activate} className={styles["tab"]}>video</span>
            <span onClick={activate} className={styles["tab"]}>size & specs</span>
            <span onClick={activate} className={styles["tab"]}>delivery & returns</span>
            <span onClick={activate} className={styles["tab"]}>reviews</span>
        </div>

    </div>
};

export default ProductSubTabs;