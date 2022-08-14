import React, { useEffect, useRef, useState } from 'react';
import styles from './Shop.module.css';
import global from '../../index.module.css';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/img/home-page/background-home.png';
import Category from '../../components/Category/Category';
import Overview from '../../components/Overview/Overview';
import Product from '../../components/Product/Product';



const Shop = () => {

    const [productSize, setProductSize] = useState("grid");
    const gridContainer = useRef(null);


    // const gridContainer = document.querySelector(`.${styles["grid-container"]}`);


    const changeGrid = (gridSize) => {
        switch (gridSize) {
            case "many":
                gridContainer.current.className = `${styles["grid-container"]} ${styles["many"]}`;
                setProductSize("small")
                console.log(productSize);
                break;
            case "grid":
                gridContainer.current.className = `${styles["grid-container"]} ${styles["many"]}`;
                setProductSize("grid")
                console.log(productSize);
                break;
            case "single":
                gridContainer.current.className = `${styles["grid-container"]} ${styles["single"]}`;
                setProductSize("full")
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        gridContainer.current = document.querySelector(`.${styles["grid-container"]}`);
    }, [])


    return <div className={`${styles["shop-page"]} ${global["content"]}`}>
        <div className={`${styles["actrion-bar"]}`}>
            <div onClick={() => changeGrid("grid")} className={`${styles["display-many"]}`}>
                <i className="fa-solid fa-table-cells"></i>
            </div>
            <div onClick={() => changeGrid("many")} className={`${styles["display-many"]}`}>
                <i className="fa-solid fa-table-cells-large"></i>
            </div>
            <div onClick={() => changeGrid("single")} className={`${styles["display-single"]}`}>
                <i className="fa-regular fa-square"></i>
            </div>
        </div>
        <div className={`${styles["grid-container"]} ${styles["many"]}`}>
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
            <Product size={productSize} />
        </div>
    </div >
};

export default Shop;