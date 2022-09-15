import React, { useContext, useEffect, useState } from 'react';

import styles from './DeleteMainMenu.module.css';

import api from '../../../../api';
import { MenuContext } from '../../../../globalFunctions/Store/MenuStore';
import Button from '../../../Button/Button';

const DeleteMainMenu = () => {
    const { mainMenu, setHasToUpdate } = useContext(MenuContext);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [menuTitle, setMenuTitle] = useState("");
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        api.deleteMenu(selectedMenu)
            .then(res => res)
            .then(res => setIsLoading(false))
            .then(() => setHasToUpdate(true))
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const renderConfirmScreen = () => {
        setShowConfirmScreen(true);
    }

    const handleSelectMenu = (test) => {
        mainMenu.map(m => {
            if (m.id === +test) {
                setMenuTitle(m.title);
                setSelectedMenu(m);
                return m;
            } else {
                return null;
            }
        });
    };


    return <>

        <div className={styles["main-menu-form"]}>
            <select className={`${styles["select-menu"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
                <option  >Select a menu to delete:</option>
                {mainMenu.map((element, index) => {
                    return <option key={index} value={element.id}>{element.title}</option>
                })}
            </select>
            <Button {...{
                isLoading,
                handleClick: renderConfirmScreen,
                btnSubmit: "Delete Menu",
                type: "button",
                colour: "red"
            }} />
        </div>
        {showConfirmScreen
            ? <div onClick={() => setShowConfirmScreen(false)} className={`${styles["confirmation-background"]}`}>
                <div className={`${styles["confirmation-screen"]}`}>
                    <Button {...{
                        isLoading,
                        handleClick: submit,
                        btnSubmit: `Confirm deletion of "${menuTitle}"`,
                        type: "button",
                        colour: "red"
                    }} />
                </div>
            </div>

            : <></>}
    </>
};

export default DeleteMainMenu;