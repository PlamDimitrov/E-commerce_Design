import React, { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {
    const [images, setImages] = useState(props.images);
    const amountOfImages = images.length;

    const slider = useRef(null)
    const image = useRef(null)

    let currentImage = 1;
    let leftPossition = 0;

    const getImageWidth = (currentImage) => {
        return document.querySelector(`.${styles["image"]} img:nth-child(${currentImage})`).offsetWidth;
    }
    const getImageHeight = (currentImage) => {
        return document.querySelector(`.${styles["image"]} img:nth-child(${currentImage})`).offsetHeight;
    }

    const setCarouselWidth = (currentImage) => {
        slider.current.style.width = `${getImageWidth(currentImage)}px`;

    };
    const setCarouselHeight = (currentImage) => {
        slider.current.style.height = `${getImageHeight(currentImage)}px`;

    };

    const getSpecificImage = (childNumber) => {
        const image = document.querySelector(`.${styles["image"]} img:nth-child(${childNumber})`)
        console.log(image); ///static/media/product.04842240e8cb9625acb3.png
        return image;
    }

    const getImages = () => {
        let imagesWidts = [];
        for (let index = 0; index < amountOfImages; index++) {
            imagesWidts.push(getSpecificImage(index + 1).offsetWidth);
        }
        return imagesWidts;
    }

    const getPossition = (imagesWidts) => {
        leftPossition = 0;
        for (let index = 0; index < currentImage - 1; index++) {
            leftPossition += imagesWidts[index];
        }
    }

    const moveViewport = (currentImage) => {
        if (currentImage === 1) {
            image.current.style.left = `0px`
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
        } else {
            setCarouselWidth(currentImage);
            setCarouselHeight(currentImage);
            image.current.style.left = `-${leftPossition}px`;
        }
    }

    const moveCarouselRight = () => {
        if (currentImage < amountOfImages && currentImage >= 1) {
            currentImage++;
        } else if (currentImage === amountOfImages) {
            currentImage = 1;
        }
        getPossition(getImages());
        moveViewport(currentImage);
    }

    const moveCarouselLeft = () => {
        if (currentImage <= amountOfImages && currentImage > 1) {
            currentImage--;
        } else if (currentImage - amountOfImages <= 0) {
            currentImage = amountOfImages;
        }
        getPossition(getImages());
        moveViewport(currentImage);
    }

    const initialSettings = () => {
        slider.current = document.querySelector(`.${styles["viewport"]}`);
        image.current = document.querySelector(`.${styles["image"]}`);
        slider.current.style.width = `${getSpecificImage(1).offsetWidth}px`;
        slider.current.style.height = `${getSpecificImage(1).offsetHeight}px`;
    }


    useEffect(() => {
        setImages(props.images);
        slider.current = document.querySelector(`.${styles["viewport"]}`);
        image.current = document.querySelector(`.${styles["image"]}`);
        slider.current.style.width = `${getSpecificImage(1).offsetWidth}px`;
        slider.current.style.height = `${getSpecificImage(1).offsetHeight}px`;
    }, [props]);

    return <div className={`${styles["slider"]}`}>
        <div className={`${styles["viewport"]}`}>
            <div className={`${styles["image"]}`}>
                {images.map(i => <img onClick={moveCarouselRight} src={i.image} key={i.id} alt={i.alt} />)}
            </div>
            <button className={`${styles["slide"]} ${styles["left"]}`} onClick={moveCarouselLeft} ><i className="fa-solid fa-chevron-left"></i></button>
            <button className={`${styles["slide"]} ${styles["right"]}`} onClick={moveCarouselRight}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
};

export default Slider;