import React, { useEffect } from 'react';
import styles from './ProductView.module.css';
import globalStyles from '../../index.module.css';

import Background from '../../components/Background/Background';
import Slider from '../../components/Slider/Slider';

//---simulation of images from DB... To Be Deleted! Only for test!---
import productImg from '../../assets/img/product.png';
import category from '../../assets/img/background.png';
import ProductContent from '../../components/ProductContent/ProductContent';
import { Link as span } from 'react-router-dom';
import ProductSubTabs from '../../components/ProductSubTabs/ProductSubTabs';
//---simulation of images from DB... To Be Deleted! Only for test!---

const ProductView = () => {
  //---simulation of images from DB... To Be Deleted! Only for test!---
  let index = 0;

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


  const setupImages = () => {

    const imagesToTransfer = [];
    product.images.map(i => {
      imagesToTransfer.push({
        image: i,
        id: index,
        alt: "some text"
      });
      index++;
    }
    )
    return imagesToTransfer;
  }
  //---simulation of images from DB... To Be Deleted! Only for test!---

  return <div className={styles["product-view"]} >
    <Background titleString="Product view" pageName="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt" />
    <div className={globalStyles["content"]} >
      <div className={styles["product"]}>
        <Slider
          images={setupImages()}
        />
        <ProductContent
          title={product.title}
          oldPrice={product.oldPrice}
          price={product.price}
          availability={product.availability}
          code={product.code}
          tags={product.tags}
          description={product.description}
          colour={product.colour}
          size={product.size}
          detailedDescription={product.detailedDescription}
          video={product.video}
          reviews={product.reviews}
        />
      </div>
      <ProductSubTabs videoUrl="https://www.youtube.com/embed/Qx0zSF6y70Y" />
    </div>
  </div>
};

export default ProductView;