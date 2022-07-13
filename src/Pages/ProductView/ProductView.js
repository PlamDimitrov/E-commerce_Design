import React from 'react';
import styles from './ProductView.module.css';
import globalStyles from '../../index.module.css';

import Background from '../../components/Background/Background';
import Slider from '../../components/Slider/Slider';

//---simulation of images from DB... To Be Deleted! Only for test!---
import productImg from '../../assets/img/product.png';
import category from '../../assets/img/background.png';
import ProductContent from '../../components/ProductContent/ProductContent';
//---simulation of images from DB... To Be Deleted! Only for test!---

const ProductView = () => {
  //---simulation of images from DB... To Be Deleted! Only for test!---
  let index = 0;
  const images = [productImg, category, productImg, productImg, productImg, productImg];
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
  //---simulation of images from DB... To Be Deleted! Only for test!---

  return <div className={styles["product-view"]} >
    <Background titleString="Product view" pageName="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt" />
    <div className={globalStyles["content"]} >
      <div className={styles["product"]}>
        <Slider images={imagesToTransfer} />
        <ProductContent />
      </div>
    </div>
  </div>
};

export default ProductView;