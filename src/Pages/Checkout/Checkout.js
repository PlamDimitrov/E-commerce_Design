import React, { useEffect, useRef, useState } from 'react';
import styles from './Checkout.module.css';
import global from '../../index.module.css';

//---simulation of images from DB... To Be Deleted! Only for test!---
import productImg from '../../assets/img/product.png';
import category from '../../assets/img/background.png';
//---simulation of images from DB... To Be Deleted! Only for test!---

const product = {
    title: "Ave classic sweatshirt",
    images: [productImg, category, productImg, productImg, productImg, productImg],
    oldPrice: 107,
    price: 89.99,
    availability: true,
    code: "#499577",
    tags: ["Classic", "Casual", "V-neck", "Loose"],
    description: `Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.`,
    colour: "Red",
    size: "",
    detailedDescription: "",
    video: "",
    reviews: [{ id: 1 }, { id: 5 }]
}

const Checkout = () => {

    const removeItem = () => {
        console.log("Removed");
    }

    return <div className={`${styles["checkout"]} ${global["content"]}`}>
        <div className={`${styles["products"]}`}>
            <div className={`${styles["product"]}`}>
                <img src={product.images[0]} alt="product" />
                <div className={`${styles["product-content"]}`}>
                    <h1 className={`${styles["title"]}`}>{product.title}</h1>
                    <input type="number" name="quontity" placeholder="1" min="1" />
                    <span>pc.</span>
                    <div className={styles["hover-icon"]}>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className={styles["product-remove"]}>
                        <i onClick={removeItem} className="fa-solid fa-rectangle-xmark"></i>
                    </div>
                </div>
            </div>
            <div className={`${styles["product"]}`}>
                <img src={product.images[0]} alt="product" />
                <div className={`${styles["product-content"]}`}>
                    <h1 className={`${styles["title"]}`}>{product.title}</h1>
                    <input type="number" name="quontity" placeholder="1" min="1" />
                    <span>pc.</span>
                    <div className={styles["hover-icon"]}>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className={styles["product-remove"]}>
                        <i onClick={removeItem} className="fa-solid fa-rectangle-xmark"></i>
                    </div>
                </div>
            </div>
            <div className={`${styles["product"]}`}>
                <img src={product.images[0]} alt="product" />
                <div className={`${styles["product-content"]}`}>
                    <h1 className={`${styles["title"]}`}>{product.title}</h1>
                    <input type="number" name="quontity" placeholder="1" min="1" />
                    <span>pc.</span>
                    <div className={styles["hover-icon"]}>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className={styles["product-remove"]}>
                        <i onClick={removeItem} className="fa-solid fa-rectangle-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles["total-and-continue"]}`}>
            <h1>Order information:</h1>
            <span>Your Order cotains: {"3"} products</span>
            <span>shiping will cost: {0} $</span>

            <div className={`${styles["total"]}`}>
                <h1>
                    Total: <span>1999</span> $
                </h1>
            </div>
            <div className={`${styles["continue"]}`}>
                <button className={styles['add-to-cart']}><i class="fa-solid fa-forward"></i>Continue</button>
            </div>
        </div>

    </div >
};

export default Checkout;