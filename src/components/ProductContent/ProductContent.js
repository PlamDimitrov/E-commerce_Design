import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import styles from './ProductContent.module.css';

const ProductContent = () => {


    return <div className={`${styles["product-content"]}`}>
        <h1 className={`${styles["title"]}`}>Ave classic sweatshirt</h1>
        <div className={`${styles["atributes"]}`}>
            <Rating rating={2.3} reviews={3} />
            <Link to="/" className={`${styles["add-review"]}`}>Add a review</Link>
            <span className={`${styles["share"]}`}>
                Share:
                <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="/"><i className="fa-brands fa-google-plus-g"></i></Link>
                <Link to="/"><i className="fa-brands fa-pinterest-p"></i></Link>
                <Link to="/"><i className="fa-brands fa-instagram-square"></i></Link>
                <Link to="/"><i className="fa-solid fa-envelope"></i></Link>
            </span>
        </div>
    </div>
};

export default ProductContent;