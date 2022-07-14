import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import styles from './ProductContent.module.css';

const ProductContent = (props) => {


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
        <div className={`${styles["priceing"]}`}>
            <span className={`${styles["price"]} ${styles["old"]}`}>{props.oldPrice}$</span>
            <span className={`${styles["price"]}`}>{props.price}$</span>
        </div>
        <div className={`${styles["parameters"]}`}>
            <span>Availability: <p>{props.availability ? "In stock" : "Not in stock"}</p></span>
            <span>Product Code: <p>{props.code}</p></span>
            <span>Tags: {props.tags.map(i => <Link to="/" key={i}>${i}, </Link>)}</span>
        </div>
        <span className={`${styles["description"]}`}>{props.description}</span>
        <div className={`${styles["dropdowns"]}`}>
            <div>
                <label>Colour:</label>
                <select name="colour" >
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                </select>
            </div>
            <div>
                <label>Size:</label>
                <select name="size" tytle="sssssss">
                    <option className={`${styles["option"]}`} value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div>
                <label>Quontity:</label>
                <input type="number" name="quontity" placeholder="1" min="1" />
            </div>
        </div>
        <div className={styles["buttons"]}>
            <button className={styles['add-to-cart']}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
            <button className={styles['add-to-favorites']}><i className="fa-regular fa-heart"></i>Add to favorites</button>
        </div>
        <div className={styles["compare"]}>
            <Link to="/"><i className="fa-solid fa-down-left-and-up-right-to-center"></i>Add to compare</Link>
        </div>
    </div>
};

export default ProductContent;