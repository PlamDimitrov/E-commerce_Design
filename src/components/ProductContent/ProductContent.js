import React, { useEffect, useRef } from 'react';
import styles from './ProductContent.module.css';

const ProductContent = (props) => {


    return <div className={`${styles["product-content"]}`}>
        <h1 className={`${styles["title"]}`}>Ave classic sweatshirt</h1>
    </div>
};

export default ProductContent;