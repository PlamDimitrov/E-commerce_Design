import React, { memo, useLayoutEffect, useState } from 'react';

import styles from './DeleteProduct.module.css';

import api from '../../../../api';
import Button from '../../formComponents/Button/Button';

const MenoButton = memo(Button);

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productName, setProductName] = useState("---");
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        try {
            const productsResponse = await api.deleteProduct(selectedProduct);
            if (productsResponse.ok) {
                products.forEach((c, index) => {
                    if (c.id === selectedProduct.id) {
                        products.splice(index, 1)
                    }
                })
                setIsLoading(false)
                setSelectedProduct(null);
                setProductName("---");
                document.querySelector(`.${styles["select-product"]}`).selectedIndex = 0;
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const renderConfirmScreen = () => {
        setShowConfirmScreen(true);
    }

    const handleSelectMenu = (id) => {
        let hasSelectedMenu = false;
        products.forEach(m => {
            if (m.id === +id) {
                setProductName(m.title);
                setSelectedProduct(m);
                hasSelectedMenu = true
                return m;
            }
        });
        if (!hasSelectedMenu) {
            setSelectedProduct(null);
            setProductName("---");
            return null;
        }
    };

    const getAllProducts = async () => {
        try {
            const response = await api.getAllProducts();
            const productsFromDb = await response.json();
            setProducts(productsFromDb);
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <>
        <div className={styles["product-form"]}>
            <select className={`${styles["select-product"]}`} onChange={(event) => handleSelectMenu(event.target.value)}>
                <option value={"---"}>Select a Product to delete:</option>
                {products.map((element, index) => {
                    return <option key={index} value={element.id}>{element.title}</option>
                })}
            </select>
            <MenoButton {...{
                isLoading,
                handleClick: renderConfirmScreen,
                text: "Delete Product",
                type: "button",
                colour: "red",
                isActive: selectedProduct
            }} />
        </div>
        {showConfirmScreen
            ? <div onClick={() => setShowConfirmScreen(false)} className={`${styles["confirmation-background"]}`}>
                <div className={`${styles["confirmation-screen"]}`}>
                    <MenoButton {...{
                        isLoading,
                        handleClick: submit,
                        text: `Confirm deletion of "${productName}"`,
                        type: "button",
                        colour: "red"
                    }} />
                </div>
            </div>
            : <></>}
    </>
};

export default DeleteProduct;