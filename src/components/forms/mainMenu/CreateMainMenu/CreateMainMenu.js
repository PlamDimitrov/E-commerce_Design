import React, { useContext, useState } from 'react';

import styles from './CreateMainMenu.module.css';

import spinner from '../../../../assets/spinner.gif';
import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../formComponents/Button/Button';
import CategorySection from '../CategorySection/CategorySection';

const CreateMainMenu = () => {
    const { setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubCategory, setHasSubCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [menuTitle, setMenuTitle] = useState("");
    const [menuAddress, setMenuAddress] = useState("");

    const handleCheckBox = () => {
        if (!hasSubCategory) {
            addCategory();
            setHasSubCategory(true)
        } else {
            setCategories([])
            setHasSubCategory(false)
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
                return <CategorySection key={categoryIndex} {...{
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
                required={true}
                className={`${styles["input"]} ${styles["error"]} `}
                placeholder="Menu address.." autoComplete="off" />
            <div className={styles["category"]}>
                <div className={styles["check-box-title"]}>
                    <p className={styles["input-title"]}>Category..</p>
                    <input onClick={handleCheckBox} type="checkbox" className={`${styles["check-box"]} ${styles["error"]} `} />
                </div>
                <div className={styles["category-form"]}>
                    {hasSubCategory ? renderSubCategory() : <></>}
                </div>
                {hasSubCategory
                    ? <div className={styles["category-action"]}>
                        <Button {...{
                            handleClick: addCategory,
                            text: "Add Category",
                            type: "button"
                        }} />
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