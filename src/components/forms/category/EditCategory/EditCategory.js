import React, { useLayoutEffect, useState } from 'react';

import styles from './EditCategory.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import spinner from '../../../../assets/spinner_v3.gif';
import avatar from '../../../../assets/img/Avatar.jpg';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';

const EditCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [picture, setPicture] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryName, setCategoryName] = useState("");

    const handleSelectCategory = (categoryId) => {
        let hasSelectedMenu = false;
        categories.forEach(c => {
            if (c.id === +categoryId) {
                setCategoryName(c.name);
                setPicture(c.image ? `data:image/png;base64, ${c.image}` : false);
                setSelectedCategory(c);
                hasSelectedMenu = true
                return c;
            }
        });
        if (!hasSelectedMenu) {
            setPicture(false)
            setSelectedCategory("");
            setCategoryName("");
            setSelectedFile(false);
            return null;
        }
    };

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
        setSelectedFile(null);
        setPicture(null);
    }

    const submitImage = (id) => {
        setIsLoading(true);
        const data = new FormData();
        if (selectedFile === null) {
            data.append("image", null);
        } else {
            data.append("image", selectedFile);
        }
        fetch(routes.categoryPicture + `/${id}`, {
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
                api.getAllCategories()
                    .then(res => setCategories(res))
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false)
            })
    };

    const submitCategory = async () => {
        setIsLoading(true);
        api.editCategory(selectedCategory.id, { name: categoryName })
            .then(res => {
                if (res.ok) {
                    categories.find(({ id }) => id === +selectedCategory.id).name = categoryName;
                }
                setIsLoading(false);
                return res.json();
            })
            .then(res => {

                submitImage(res.id);

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

    useLayoutEffect(() => {
        api.getAllCategories()
            .then(res => setCategories(res))
    }, [])

    return <>
        <select className={`${styles["select-category"]}`} onChange={(event) => handleSelectCategory(event.target.value)}>
            <option value={""} >Select a category to edit:</option>
            {categories.map((element, index) => {
                return <option key={index} value={element.id}>{element.name}</option>
            })}
        </select>
        <div className={styles["category-form"]}>
            <h1 className={styles["title"]}>
                Edit Category
            </h1>
            <form>
                <Input
                    {...{
                        handleChange: (event) => setCategoryName(event.target.value),
                        value: categoryName,
                        placeholder: "Category name...",
                    }}
                />
                <div className={`${styles["picture"]}`}>
                    {picture ? <img onDrop={onChangeHandler} src={picture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
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
                    type: "button",
                    isActive: selectedCategory
                }} />
            </form>
        </div>
    </>
};

export default EditCategory;