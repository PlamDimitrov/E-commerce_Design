import React, { useState } from 'react';

import styles from './CreateCategory.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';

const CreateCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [categoryName, setCategoryName] = useState("");

    const submitImage = (id) => {
        setIsLoading(true);
        const data = new FormData();
        data.append("image", selectedFile);
        fetch(routes.categoryPicture + `/${id}`, {
            method: 'POST',
            credentials: 'include',
            body: data
        })
            .then(res => {
                if (res.ok) {
                    setSelectedFile(null);
                    setImage(null);
                }
                setIsLoading(false);
                return res.json()
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false)
            })
    };

    const submitCategory = () => {
        setIsLoading(true);
        api.createCategory({ name: categoryName })
            .then(res => {
                if (res.ok) {
                    setCategoryName("");
                }
                setIsLoading(false);
                return res.json();
            })
            .then(res => {
                if (selectedFile) {
                    submitImage(res.id);
                }
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
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
                    handleChange: (event) => setCategoryName(event.target.value),
                    value: categoryName,
                    placeholder: "Category name...",
                }}
            />
            <Image {...{
                image,
                isLoading,
                setSelectedFile
            }} />
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