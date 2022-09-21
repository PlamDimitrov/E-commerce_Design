import React, { memo, useContext, useState } from 'react';

import styles from './DeleteMainMenu.module.css';

import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../formComponents/Button/Button';

const MenoButton = memo(Button);

const DeleteMainMenu = () => {
    const { mainMenu, setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [menuTitle, setMenuTitle] = useState("---");
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        api.deleteMenu(selectedMenu)
            .then(res => res)
            .then(res => {
                setIsLoading(false)
                setHasToUpdate(true)
                setSelectedMenu(null);
                setMenuTitle("---");
                document.querySelector(`.${styles["select-menu"]}`).selectedIndex = 0;
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
        mainMenu.map(m => {
            if (m.id === +id) {
                setMenuTitle(m.title);
                setSelectedMenu(m);
                hasSelectedMenu = true
                return m;
            }
            return null;
        });
        if (!hasSelectedMenu) {
            setSelectedMenu(null);
            setMenuTitle("---");
            return null;
        }
    };


    return <>
        <div className={styles["main-menu-form"]}>
            <select className={`${styles["select-menu"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
                <option value={"---"}>Select a menu to delete:</option>
                {mainMenu.map((element, index) => {
                    return <option key={index} value={element.id}>{element.title}</option>
                })}
            </select>
            <MenoButton {...{
                isLoading,
                handleClick: renderConfirmScreen,
                text: "Delete Menu",
                type: "button",
                colour: "red",
                isActive: selectedMenu
            }} />
        </div>
        {showConfirmScreen
            ? <div onClick={() => setShowConfirmScreen(false)} className={`${styles["confirmation-background"]}`}>
                <div className={`${styles["confirmation-screen"]}`}>
                    <MenoButton {...{
                        isLoading,
                        handleClick: submit,
                        text: `Confirm deletion of "${menuTitle}"`,
                        type: "button",
                        colour: "red"
                    }} />
                </div>
            </div>
            : <></>}
    </>
};

export default DeleteMainMenu;