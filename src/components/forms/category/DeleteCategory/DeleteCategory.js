import React, { memo, useLayoutEffect, useState } from 'react';

import styles from './DeleteCategory.module.css';

import api from '../../../../api';
import Button from '../../formComponents/Button/Button';

const MenoButton = memo(Button);

const DeleteCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryName, setCategoryName] = useState("---");
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        api.deleteCategory(selectedCategory)
            .then(res => res)
            .then(res => {
                if (res.ok) {
                    categories.forEach((c, index) => {
                        if (c.id === selectedCategory.id) {
                            categories.splice(index, 1)
                        }
                    })
                    setIsLoading(false)
                    setSelectedCategory(null);
                    setCategoryName("---");
                    document.querySelector(`.${styles["select-category"]}`).selectedIndex = 0;
                }
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })

    }

    const renderConfirmScreen = () => {
        setShowConfirmScreen(true);
    }

    const handleSelectMenu = (id) => {
        let hasSelectedMenu = false;
        categories.forEach(m => {
            if (m.id === +id) {
                setCategoryName(m.name);
                setSelectedCategory(m);
                hasSelectedMenu = true
                return m;
            }
        });
        if (!hasSelectedMenu) {
            setSelectedCategory(null);
            setCategoryName("---");
            return null;
        }
    };

    useLayoutEffect(() => {
        api.getAllCategories()
            .then(res => setCategories(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <>
        <div className={styles["category-form"]}>
            <select className={`${styles["select-category"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
                <option value={"---"}>Select a Category to delete:</option>
                {categories.map((element, index) => {
                    return <option key={index} value={element.id}>{element.name}</option>
                })}
            </select>
            <MenoButton {...{
                isLoading,
                handleClick: renderConfirmScreen,
                text: "Delete Category",
                type: "button",
                colour: "red",
                isActive: selectedCategory
            }} />
        </div>
        {showConfirmScreen
            ? <div onClick={() => setShowConfirmScreen(false)} className={`${styles["confirmation-background"]}`}>
                <div className={`${styles["confirmation-screen"]}`}>
                    <MenoButton {...{
                        isLoading,
                        handleClick: submit,
                        text: `Confirm deletion of "${categoryName}"`,
                        type: "button",
                        colour: "red"
                    }} />
                </div>
            </div>
            : <></>}
    </>
};

export default DeleteCategory;