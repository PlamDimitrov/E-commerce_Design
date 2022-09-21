import React, { useState } from 'react';

import styles from './CreateCategory.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import spinner from '../../../../assets/spinner_v3.gif';
import avatar from '../../../../assets/img/Avatar.jpg';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';

const CreateCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [picture, setPicture] = useState([]);
    const [selectedFile, setSelectedFile] = useState(false);
    const [category, setCategory] = useState("");

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
        setPicture([]);
    }

    const submitImage = (id) => {
        setIsLoading(true);
        const data = new FormData();
        data.append("image", selectedFile);
        fetch(routes.categoryPicture + `/${id}`, {
            method: 'POST',
            credentials: 'include',
            body: data
        })
            .then(res => res.json())
            .then(res => {
                setPicture(res.image ? `data:image/png;base64, ${res.image}` : false)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false)
            })
    };

    const submitCategory = async () => {
        setIsLoading(true);
        api.createCategory(category)
            .then(res => res.json())
            .then(res => submitImage(res.id))
            .catch(err => console.log(err))
    }


    const submit = (event) => {
        event.preventDefault();
        submitCategory();
    };

    return <div className={styles["category-form"]}>
        <h1 className={styles["title"]}>
            Create Category
        </h1>
        <form>
            <Input
                {...{
                    handleChange: (event) => setCategory({ name: event.target.value }),
                    value: category.name,
                    placeholder: "Category name...",
                }}
            />
            <div className={`${styles["picture"]}`}>
                {selectedFile ? <img onDrop={onChangeHandler} src={picture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
                {isLoading
                    ? renderLoader()
                    : <></>
                }
                <input onDrop={onChangeHandler} onChange={onChangeHandler} multiple type="file" />
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
                text: "Submit Category",
                type: "button"
            }} />
        </form>
    </div>
};

export default CreateCategory;