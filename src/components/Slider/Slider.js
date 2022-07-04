import React, { useEffect, useRef } from 'react';
import styles from './Slider.module.css';

import { Link } from 'react-router-dom';

import categoryImg from '../../assets/img/category.png';


const Slider = (props) => {
    const images = props.images;
    const amountOfImages = images.length;

    let slider = null;
    let image = null;
    let currentImage = 1;
    let leftPossition = 0;

    const getImageWidth = (currentImage) => {
        return document.querySelector(`.${styles["image"]} img:nth-child(${currentImage})`).offsetWidth;
    }
    const getImageHeight = (currentImage) => {
        return document.querySelector(`.${styles["image"]} img:nth-child(${currentImage})`).offsetHeight;
    }

    const setCarouselWidth = (currentImage) => {
        slider.style.width = `${getImageWidth(currentImage)}px`;

    };
    const setCarouselHeight = (currentImage) => {
        slider.style.height = `${getImageHeight(currentImage)}px`;

    };

    const getSpecificImage = (childNumber) => {
        return document.querySelector(`.${styles["image"]} img:nth-child(${childNumber})`);
    }

    const moveCarouselRight = () => {

        let imagesWidts = [];
        leftPossition = 0;
        if (currentImage < amountOfImages && currentImage >= 1) {
            currentImage++;
        } else if (currentImage === amountOfImages) {
            currentImage = 1;
        }
        for (let index = 0; index < amountOfImages; index++) {
            imagesWidts.push(getSpecificImage(index + 1).offsetWidth);
        }
        for (let index = 0; index < currentImage - 1; index++) {
            leftPossition += imagesWidts[index];
        }
        if (currentImage === 1) {
            image.style.left = `0px`
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
        } else {
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
            image.style.left = `-${leftPossition}px`;
        }
        console.log(imagesWidts);
    }

    const moveCarouselLeft = () => {
        let imagesWidts = [];
        leftPossition = 0;
        if (currentImage <= amountOfImages && currentImage > 1) {
            currentImage--;
        } else if (currentImage - amountOfImages <= 0) {
            currentImage = amountOfImages;
        }
        for (let index = 0; index < amountOfImages; index++) {
            imagesWidts.push(getSpecificImage(index + 1).offsetWidth);
        }
        for (let index = 0; index < currentImage - 1; index++) {
            leftPossition += imagesWidts[index];
        }
        if (currentImage === 1) {
            image.style.left = `0px`
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
        } else {
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
            image.style.left = `-${leftPossition}px`;
        }
    }



    useEffect(() => {
        slider = document.querySelector(`.${styles["slider"]}`);
        image = document.querySelector(`.${styles["image"]}`);
        slider.style.width = `${getSpecificImage(1).offsetWidth}px`;
        slider.style.height = `${getSpecificImage(1).offsetHeight}px`;
        console.log(1);
    }, []);

    return (
        <>
            <div className={`${styles["slider"]}`}>
                <div className={`${styles["image"]}`}>
                    {images.map(i => <img src={i.image} key={i.id} alt={i.alt} />)}
                </div>
            </div>
            <button onClick={moveCarouselLeft} ><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={moveCarouselRight}><i className="fa-solid fa-chevron-right"></i></button>
        </>
    )
};

export default Slider;