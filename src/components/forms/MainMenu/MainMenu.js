import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../../globalFunctions/Store/Store";
import handleError from "../../../globalFunctions/serverErrors";
import styles from './MainMenu.module.css';

import spinner from '../../../assets/spinner.gif';

const MainMenu = (props) => {
    const link = <>
        <hr />
        <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Link text.." autoComplete="off" />
        <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Link address.." autoComplete="off" />
        <hr />
    </>

    const [isloading, setIsLoading] = useState(true);
    const [subCategory, setSubCategory] = useState(false);
    // const [category, setCategory] = useState([link]);
    const [category, setCategory] = useState([{ links: [link] }]);


    const handleCheckBox = () => setSubCategory(!subCategory);

    const addLinkInput = (index) => {
        const arr = [...category];
        arr[index].links.push(link);
        setCategory(arr);
    }
    const removeLinkInput = (index) => {
        const arr = [...category];
        arr[index].links.pop();
        setCategory(arr);
    }

    const addCategory = () => {
        setCategory(current => [...current, { links: [link] }])
    }
    const removeCategory = () => {
        const arr = [...category];
        arr.pop();
        setCategory(arr);
    }

    const renderSubCategory = () => {
        return category.map(
            (c, index) => {
                return <div key={index} className={`${styles["content"]}`}>
                    <input className={`${styles["input"]} ${styles["category-name"]} ${styles["error"]}`} placeholder="Category name.." autoComplete="off" />
                    <div className={`${styles["links"]}`}>
                        {c.links.map((e, index) => <div key={index} >
                            <hr />
                            <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Link text.." autoComplete="off" />
                            <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Link address.." autoComplete="off" />
                            <hr />
                        </div>)}
                        <button type='button' onClick={() => removeLinkInput(index)} className={styles["small-btn"]}>Remove Link</button>
                        <button type='button' onClick={() => addLinkInput(index)} className={styles["small-btn"]}>Add Link</button>
                    </div>
                </div>
            }
        )
    }


    return <div className={styles["main-menu-form"]}>
        <h1 className={styles["title"]}>
            Create main menu
            {isloading ? <img className={styles['loader']} src={spinner} alt="spinner" /> : <></>}
        </h1>
        <form>
            <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Menu title.." autoComplete="off" />
            <input className={`${styles["input"]} ${styles["error"]} `} placeholder="Menu address.." autoComplete="off" />
            <div className={styles["category"]}>
                <div className={styles["check-box-title"]}>
                    <p className={styles["input-title"]}>Category..</p>
                    <input onClick={handleCheckBox} type="checkbox" className={`${styles["check-box"]} ${styles["error"]} `} />
                </div>
                <div className={styles["category-form"]}>
                    {subCategory ? renderSubCategory() : <></>}
                    {subCategory
                        ? <div className={styles["category-action"]}>
                            <button type='button' onClick={addCategory} className={styles["small-btn"]}>Add Category</button>
                            <button type='button' onClick={removeCategory} className={styles["small-btn"]}>Remove Category</button>
                        </div>
                        : <></>}
                </div>
            </div>
        </form>
    </div>
};

export default MainMenu;