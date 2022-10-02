import React, { useEffect, useState } from 'react';

import styles from './Image.module.css';

import avatar from '../../../../assets/img/Avatar.jpg';
import spinner from '../../../../assets/spinner_v3.gif';
import Button from '../Button/Button';

const Image = ({
    image,
    isLoading,
    setSelectedFile
}) => {
    const [selectedImage, setSelectedImage] = useState(image);

    const clearImage = () => {
        setSelectedFile(null);
        setSelectedImage(null);
    }

    const onChangeHandler = async (event) => {
        setSelectedFile(event.target.files[0]);
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    const renderLoader = () => {
        return <div className={`${styles["loader"]}`}>
            <img className={styles['spinner']} src={spinner} alt="spinner" />
        </div>
    }
    const renderImage = () => {
        if (selectedImage) {
            return <img onDrop={onChangeHandler} src={selectedImage} alt="profile_picture" />
        } else {
            return <img src={avatar} alt="profile_picture" />
        }
    }

    useEffect(() => {
        setSelectedImage(image);
    }, [image])

    return <div className={`${styles["picture"]}`}>
        {renderImage()}
        {isLoading
            ? renderLoader()
            : <></>
        }
        <input onDrop={onChangeHandler} onChange={onChangeHandler} type="file" />
        <Button {...{
            isLoading,
            handleClick: clearImage,
            text: "X",
            type: "button",
            colour: "red",
            size: "small"
        }} />
    </div>
};

export default Image;