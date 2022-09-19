import React from 'react';
import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';

import styles from './CategorySection.module.css';

const CategorySection = ({
    category,
    categories,
    categoryIndex,
    setCategories
}) => {

    const addLinkInput = (categoryIndex) => {
        const arr = [...categories];
        const link = {
            text: "",
            address: ""
        }
        arr[categoryIndex].links.push(link);
        setCategories(arr);
    };

    const removeLinkInput = (categoryIndex, linkIndex) => {
        const arr = [...categories];
        arr[categoryIndex].links.splice(linkIndex, 1);
        setCategories(arr);
    };

    const getCategoryData = (categoryIndex, data) => {
        const arr = [...categories];
        arr[categoryIndex].name = data;
        setCategories(arr);
    };

    const getLinkData = (categoryIndex, linkIndex, data) => {
        const arr = [...categories];
        arr[categoryIndex].links[linkIndex][data.name] = data.value;
        setCategories(arr);
    };

    const removeSpecificCategory = (categoryIndex) => {
        const arr = [...categories];
        arr.splice(categoryIndex, 1);
        setCategories(arr);
    };

    return <div key={categoryIndex} className={`${styles["content"]}`}>
        <div className={`${styles["remove-category-section"]}`}>
            <Button {...{
                type: "button",
                text: "Remove category",
                handleClick: () => removeSpecificCategory(categoryIndex),
                colour: "red",
                size: "small"
            }} />
        </div>
        <Input {...{
            handleChange: (event) => getCategoryData(categoryIndex, event.target.value),
            value: categories[categoryIndex].name,
            placeholder: "Category name..",
        }} />
        <div className={`${styles["links"]}`}>
            {category.links.map((l, linkIndex) => <div key={linkIndex} className={`${styles["link"]}`}>
                <div className={`${styles["remove-link-section"]}`}>
                    <Button {...{
                        type: "button",
                        text: "X",
                        handleClick: () => removeLinkInput(categoryIndex, linkIndex),
                        colour: "red",
                        size: "small"
                    }} />
                </div>
                <Input {...{
                    handleChange: (event) => getLinkData(categoryIndex, linkIndex, { name: event.target.name, value: event.target.value }),
                    value: categories[categoryIndex]["links"][linkIndex].text,
                    name: "text",
                    placeholder: "Link text..",
                }} />
                <Input {...{
                    handleChange: (event) => getLinkData(categoryIndex, linkIndex, { name: event.target.name, value: event.target.value }),
                    value: categories[categoryIndex]["links"][linkIndex].address,
                    name: "address",
                    placeholder: "Link address..",
                }} />
            </div>)}
            <Button {...{
                type: "button",
                text: "Add Link",
                handleClick: () => addLinkInput(categoryIndex),
            }} />
        </div>
    </div>
};

export default CategorySection;