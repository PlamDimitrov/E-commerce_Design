import React from 'react';
import Rating from '../Rating/Rating';
import styles from './ProductContent.module.css';

const ProductContent = () => {


    return <div className={`${styles["product-content"]}`}>
        <h1 className={`${styles["title"]}`}>Ave classic sweatshirt</h1>
        <div className={`${styles["atributes"]}`}>
            <Rating rating={2.3} />
        </div>
    </div>
};

export default ProductContent;