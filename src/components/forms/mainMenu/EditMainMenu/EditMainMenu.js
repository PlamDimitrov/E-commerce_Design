import React, { useContext, useEffect, useState } from 'react';

import styles from './EditMainMenu.module.css';

import spinner from '../../../../assets/spinner_v3.gif';
import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../../Button/Button';

const EditMainMenu = () => {
    const { mainMenu, setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [category, setCategory] = useState([]);
    const [menuTitle, setMenuTitle] = useState("");
    const [menuAddress, setMenuAddress] = useState("");

    const handleCheckBox = () => {
        if (!subCategory) {
            addCategory();
            setSubCategory(true)
            setIsChecked(true);
        } else {
            setCategory([])
            setSubCategory(false)
            setIsChecked(false);
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
        const id = selectedMenu.id;
        const menu = {
            Id: selectedMenu.id,
            title: menuTitle,
            address: menuAddress,
            subMenus: category
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
                setCategory(m.subMenus);
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
                        <button type='button' onClick={addCategory} className={styles["btn"]}>Add Category</button>
                    </div>
                    : <></>}
            </div>
            <Button {...{
                isLoading,
                handleClick: submit,
                btnSubmit: "Submit Menu",
                type: "button"
            }} />
        </form>
    </div>
};

export default EditMainMenu;