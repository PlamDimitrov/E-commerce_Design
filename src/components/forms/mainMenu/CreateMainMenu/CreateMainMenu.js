import React, { useContext, useState } from 'react';

import styles from './CreateMainMenu.module.css';

import spinner from '../../../../assets/spinner.gif';
import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../../Button/Button';
import CategorySection from '../CategorySection/CategorySection';

const CreateMainMenu = () => {
    const { setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(null);
    const [subCategory, setSubCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [menuTitle, setMenuTitle] = useState("");
    const [menuAddress, setMenuAddress] = useState("");

    const handleCheckBox = () => {
        if (!subCategory) {
            addCategory();
            setSubCategory(true)
        } else {
            setCategories([])
            setSubCategory(false)
        }
    };

    const addCategory = () => {
        const category = {
            name: "",
            links: [{
                text: "",
                address: ""
            }]
        }
        setCategories(current => [...current, category])

    };

    const submit = async (event) => {
        event.preventDefault();
        const menu = {
            title: menuTitle,
            address: menuAddress,
            subMenus: categories
        };
        setIsLoading(true);
        await api.createMenu(menu)
            .then(res => res)
            .then(res => setIsLoading(false))
            .then(() => {
                setHasToUpdate(true);
                setMenuTitle("");
                setMenuAddress("");
                setCategories([]);
            })
            .catch(err => console.log(err));
    };

    const renderSubCategory = () => {
        return categories.map(
            (category, categoryIndex) => {
                return <CategorySection {...{
                    category,
                    categories,
                    categoryIndex,
                    setCategories
                }} />
            }
        )
    };

    return <div className={styles["main-menu-form"]}>
        <h1 className={styles["title"]}>
            Create main menu
            {isLoading ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
        </h1>
        <form>
            <input onChange={(event) => setMenuTitle(event.target.value)}
                value={menuTitle}
                className={`${styles["input"]} ${styles["error"]} `}
                placeholder="Menu title.." autoComplete="off" />
            <input onChange={(event) => setMenuAddress(event.target.value)}
                value={menuAddress}
                className={`${styles["input"]} ${styles["error"]} `}
                placeholder="Menu address.." autoComplete="off" />
            <div className={styles["category"]}>
                <div className={styles["check-box-title"]}>
                    <p className={styles["input-title"]}>Category..</p>
                    <input onClick={handleCheckBox} type="checkbox" className={`${styles["check-box"]} ${styles["error"]} `} />
                </div>
                <div className={styles["category-form"]}>
                    {subCategory ? renderSubCategory() : <></>}
                </div>
                {subCategory
                    ? <div className={styles["category-action"]}>
                        <button type='button' onClick={addCategory} className={styles["btn"]}>Add Category</button>
                    </div>
                    : <></>}
            </div>
            <Button {...{
                isLoading,
                handleClick: submit,
                text: "Submit Menu",
                type: "button"
            }} />
        </form>
    </div>
};

export default CreateMainMenu;