import React, { useEffect, useState } from 'react';

import styles from './EditCategory.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';
import { imageProcesses } from '../../../../globalFunctions/imageProcesses';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';

const EditCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);


    const handleSelectCategory = (categoryId) => {
        let hasSelectedCategory = false;
        categories.forEach(c => {
            if (c.id === +categoryId) {
                setCategoryName(c.name);
                setImage(c.image ? c.image : false);
                setSelectedCategory(c);
                hasSelectedCategory = true
                return c;
            }
        });
        if (!hasSelectedCategory) {
            setImage(false);
            setSelectedCategory("");
            setCategoryName("");
            return null;
        }
    };

    const submitCategory = () => {
        setIsLoading(true);
        api.editCategory(selectedCategory.id, { name: categoryName })
            .then(res => {
                if (res.ok) {
                    const updatedCategories = categories;
                    updatedCategories.find(({ id }) => id === +selectedCategory.id).name = categoryName;
                    setCategories(updatedCategories);
                }
                submitImage();
                setIsLoading(false);
                return res.json();
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

    const submitImage = () => {
        const data = new FormData();
        if (selectedFile === null) {
            data.append("image", null);
        } else {
            data.append("image", selectedFile);
        }
        fetch(`${routes.categoryPicture}/${selectedCategory.id}`, {
            method: 'POST',
            credentials: 'include',
            body: data
        })
            .then(res => {
                if (res.status === 200) {
                    setImage(null);
                }
                return res.json()
            })
            .then(res => {
                if (res.image) {
                    setImage(`data:image/png;base64, ${res.image}`);
                    const updatedCategories = categories;
                    updatedCategories.find(({ id }) => id === +selectedCategory.id).image = `data:image/png;base64, ${res.image}`;
                    setCategories(updatedCategories);
                } else {
                    setImage(null);
                    const updatedCategories = categories;
                    updatedCategories.find(({ id }) => id === +selectedCategory.id).image = null;
                    setCategories(updatedCategories);
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        api.getAllCategories()
            .then(res => res.json())
            .then(res => {
                setCategories(imageProcesses.convertToBase64(res));
            })
    }, [])

    return <>
        <select className={`${styles["select-category"]}`} onChange={(event) => handleSelectCategory(event.target.value)}>
            <option value={0} >Select a category to edit:</option>
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
                <Image {...{
                    image,
                    isLoading,
                    setSelectedFile
                }} />
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