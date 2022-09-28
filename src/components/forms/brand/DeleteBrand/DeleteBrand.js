import React, { memo, useLayoutEffect, useState } from 'react';

import styles from './DeleteBrand.module.css';

import api from '../../../../api';
import Button from '../../formComponents/Button/Button';

const MenoButton = memo(Button);

const DeleteBrand = () => {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [brandName, setBrandName] = useState("---");
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        api.deleteBrand(selectedBrand)
            .then(res => res)
            .then(res => {
                if (res.ok) {
                    brands.forEach((c, index) => {
                        if (c.id === selectedBrand.id) {
                            brands.splice(index, 1)
                        }
                    })
                    setIsLoading(false)
                    setSelectedBrand(null);
                    setBrandName("---");
                    document.querySelector(`.${styles["select-brand"]}`).selectedIndex = 0;
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
        brands.forEach(m => {
            if (m.id === +id) {
                setBrandName(m.name);
                setSelectedBrand(m);
                hasSelectedMenu = true
                return m;
            }
        });
        if (!hasSelectedMenu) {
            setSelectedBrand(null);
            setBrandName("---");
            return null;
        }
    };

    useLayoutEffect(() => {
        api.getAllBrands()
            .then(res => setBrands(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <>
        <div className={styles["brand-form"]}>
            <select className={`${styles["select-brand"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
                <option value={"---"}>Select a Brand to delete:</option>
                {brands.map((element, index) => {
                    return <option key={index} value={element.id}>{element.name}</option>
                })}
            </select>
            <MenoButton {...{
                isLoading,
                handleClick: renderConfirmScreen,
                text: "Delete Brand",
                type: "button",
                colour: "red",
                isActive: selectedBrand
            }} />
        </div>
        {showConfirmScreen
            ? <div onClick={() => setShowConfirmScreen(false)} className={`${styles["confirmation-background"]}`}>
                <div className={`${styles["confirmation-screen"]}`}>
                    <MenoButton {...{
                        isLoading,
                        handleClick: submit,
                        text: `Confirm deletion of "${brandName}"`,
                        type: "button",
                        colour: "red"
                    }} />
                </div>
            </div>
            : <></>}
    </>
};

export default DeleteBrand;