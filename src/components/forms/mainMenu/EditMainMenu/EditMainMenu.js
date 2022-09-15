import React, { useContext, useEffect, useState } from 'react';

import styles from './EditMainMenu.module.css';

import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../../Button/Button';
import CategorySection from '../CategorySection/CategorySection';

const EditMainMenu = () => {
    const { mainMenu, setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [menuTitle, setMenuTitle] = useState("");
    const [menuAddress, setMenuAddress] = useState("");
    const [categories, setCategories] = useState([]);

    const handleCheckBox = () => {
        if (!subCategory) {
            addCategory();
            setSubCategory(true)
            setIsChecked(true);
        } else {
            setCategories([])
            setSubCategory(false)
            setIsChecked(false);
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
        const id = selectedMenu.id;
        const menu = {
            Id: selectedMenu.id,
            title: menuTitle,
            address: menuAddress,
            subMenus: categories
        };
        setIsLoading(true);
        await api.editMenu(id, menu)
            .then(res => res)
            .then(res => setIsLoading(false))
            .then(() => {
                setHasToUpdate(true);
            })
            .catch(err => console.log(err));
    };

    const handleSelectMenu = (test) => {
        mainMenu.map(m => {
            if (m.id === +test) {
                setMenuTitle(m.title);
                setMenuAddress(m.address);
                setCategories(m.subMenus);
                setSelectedMenu(m);
                if (m.subMenus.length > 0) {
                    setIsChecked(true);
                    setSubCategory(true);
                } else {
                    setIsChecked(false);
                    setSubCategory(false);
                }
                return m;
            } else {
                return null;
            }
        });
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
        <select className={`${styles["select-menu"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
            <option  >Select a menu to edit:</option>
            {mainMenu.map((element, index) => {
                return <option key={index} value={element.id}>{element.title}</option>
            })}
        </select>
        <h1 className={styles["title"]}>
            Edit main menu
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
                    <p className={styles["input-title"]}>Category...</p>
                    <input checked={isChecked} onChange={handleCheckBox} type="checkbox" className={`${styles["check-box"]} ${styles["error"]} `} />
                </div>
                <div className={styles["category-form"]}>
                    {subCategory ? renderSubCategory() : <></>}
                </div>
                {subCategory
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

export default EditMainMenu;