import React, { useState } from 'react';

import styles from './CreateBrand.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import spinner from '../../../../assets/spinner_v3.gif';
import avatar from '../../../../assets/img/Avatar.jpg';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';

const CreateBrand = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [picture, setPicture] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [brandName, setBrandName] = useState("");

    const onChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setPicture(URL.createObjectURL(event.target.files[0]));
    };

    const renderLoader = () => {
        return <div className={`${styles["loader"]}`}>
            <img className={styles['spinner']} src={spinner} alt="spinner" />
        </div>
    }

    const clearImage = () => {
        setSelectedFile(false);
        setPicture(false);
    }

    const submitImage = (id) => {
        if (selectedFile) {
            setIsLoading(true);
            const data = new FormData();
            data.append("image", selectedFile);
            fetch(routes.brandPicture + `/${id}`, {
                method: 'POST',
                credentials: 'include',
                body: data
            })
                .then(res => {
                    if (res.status === 200) {
                        clearImage();
                    }
                    setIsLoading(false);
                    return res.json()
                })
                .then(res => {
                    setPicture(res.image ? `data:image/png;base64, ${res.image}` : false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false)
                })
        }
    };

    const submitBrand = async () => {
        setIsLoading(true);
        api.createBrand({ name: brandName })
            .then(res => {
                if (res.ok) {
                    setBrandName("");
                }
                setIsLoading(false);
                return res.json();
            })
            .then(res => submitImage(res.id))
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }


    const submit = (event) => {
        event.preventDefault();
        submitBrand();
    };

    return <div className={styles["brand-form"]}>
        <h1 className={styles["title"]}>
            Create Brand
        </h1>
        <form>
            <Input
                {...{
                    handleChange: (event) => setBrandName(event.target.value),
                    value: brandName,
                    placeholder: "Brand name...",
                }}
            />
            <div className={`${styles["picture"]}`}>
                {picture ? <img onDrop={onChangeHandler} src={picture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
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
            <Button {...{
                isLoading,
                handleClick: submit,
                text: "Submit Brand",
                type: "button"
            }} />
        </form>
    </div>
};

export default CreateBrand;