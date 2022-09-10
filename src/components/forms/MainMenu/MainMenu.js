import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../../globalFunctions/Store/Store";
import handleError from "../../../globalFunctions/serverErrors";
import styles from './MainMenu.module.css';

import spinner from '../../../assets/spinner.gif';
import api from '../../../api';
import { MenuContext } from '../../../globalFunctions/Store/MenuStore';

const MainMenu = () => {
    const { setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(null);
    const [subCategory, setSubCategory] = useState(false);
    const [category, setCategory] = useState([]);
    const [menuTitle, setMenuTitle] = useState("");
    const [menuAddress, setMenuAddress] = useState("");


    const handleCheckBox = () => {
        if (!subCategory) {
            addCategory();
            setSubCategory(true)
        } else {
            setCategory([])
            setSubCategory(false)
        }
    };

    const addLinkInput = (categoryIndex) => {
        const arr = [...category];
        const link = {
            text: "",
            address: ""
        }
        arr[categoryIndex].links.push(link);
        setCategory(arr);
    };

    const removeLinkInput = (categoryIndex, linkIndex) => {
        const arr = [...category];
        arr[categoryIndex].links.splice(linkIndex, 1);
        setCategory(arr);
    };

    const addCategory = () => {
        const category = {
            name: "",
            links: [{
                text: "",
                address: ""
            }]
        }
        setCategory(current => [...current, category])

    };

    const removeSpecificCategory = (categoryIndex) => {
        const arr = [...category];
        arr.splice(categoryIndex, 1);
        console.log(categoryIndex);
        setCategory(arr);
    };

    const getCategoryData = (categoryIndex, data) => {
        const arr = [...category];
        arr[categoryIndex].name = data;
        setCategory(arr);
    };

    const getLinkData = (categoryIndex, linkIndex, data) => {
        const arr = [...category];
        arr[categoryIndex].links[linkIndex][data.name] = data.value;
        setCategory(arr);
    };

    const submit = async (event) => {
        event.preventDefault();
        const menu = {
            title: menuTitle,
            address: menuAddress,
            subMenus: category
        };
        setIsLoading(true);
        await api.createMenu(menu)
            .then(res => res)
            .then(res => setIsLoading(false))
            .then(() => {
                setHasToUpdate(true);
                setMenuTitle("");
                setMenuAddress("");
                setCategory([]);
            })
            .catch(err => console.log(err));
    };
    const renderSubCategory = () => {
        return category.map(
            (c, categoryIndex) => {
                return <div key={categoryIndex} className={`${styles["content"]}`}>
                    <div className={`${styles["remove-category-section"]}`}>
                        <button type='button' onClick={() => removeSpecificCategory(categoryIndex)} className={`${styles["btn"]} ${styles["small"]} ${styles["red-btn"]}`}>Remove category</button>
                    </div>
                    <input
                        onChange={(event) => getCategoryData(categoryIndex, event.target.value)}
                        className={`${styles["input"]} ${styles["category-name"]} ${styles["error"]}`}
                        value={category[categoryIndex].name}
                        placeholder="Category name.."
                        autoComplete="off" />
                    <div className={`${styles["links"]}`}>
                        {c.links.map((l, linkIndex) => <div key={linkIndex} className={`${styles["link"]}`}>
                            <div className={`${styles["remove-link-section"]}`}>
                                <button type='button' onClick={() => removeLinkInput(categoryIndex, linkIndex)} className={`${styles["btn"]} ${styles["small"]} ${styles["red-btn"]}`}>x</button>
                            </div>
                            <input
                                onChange={(event) => getLinkData(categoryIndex, linkIndex, { name: event.target.name, value: event.target.value })}
                                value={category[categoryIndex]["links"][linkIndex].text}
                                className={`${styles["input"]} ${styles["error"]} `}
                                name="text"
                                placeholder="Link text.."
                                autoComplete="off"
                            />
                            <input
                                onChange={(event) => getLinkData(categoryIndex, linkIndex, { name: event.target.name, value: event.target.value })}
                                value={category[categoryIndex]["links"][linkIndex].address}
                                className={`${styles["input"]} ${styles["error"]} `}
                                name="address"
                                placeholder="Link address.."
                                autoComplete="off" />
                        </div>)}
                        <button type='button' onClick={() => addLinkInput(categoryIndex)} className={styles["btn"]}>Add Link</button>
                    </div>
                </div>
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
            <button type='button' onClick={(event) => submit(event)} className={styles["btn"]}>Submit Menu</button>
        </form>
    </div>
};

export default MainMenu;