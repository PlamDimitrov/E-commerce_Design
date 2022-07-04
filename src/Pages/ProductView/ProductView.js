import React from 'react';
import styles from './ProductView.module.css';
import { Link } from 'react-router-dom';

import Background from '../../components/Background/Background';
import Slider from '../../components/Slider/Slider';
import PromotedProduct from '../../components/PromotedProduct/PromotedProduct';

import productImg from '../../assets/img/product.png';
import category from '../../assets/img/category.png';
import backgroundImg from '../../assets/img/background.png';

const ProductView = () => {
  let index = 0;
  const images = [productImg, category, backgroundImg];
  const imagesToTransfer = [];
  images.map(i => {
    imagesToTransfer.push({
      image: i,
      id: index,
      alt: "some text"
    });
    index++;
  }
  )

  return <div className={styles["product-view"]} >
    <Background titleString="Product view" pageName="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt" />
    <Slider images={imagesToTransfer} />
    Product view
  </div>
};

export default ProductView;