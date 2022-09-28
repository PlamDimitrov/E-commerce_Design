import React, { useLayoutEffect, useState } from 'react';

import styles from './EditBrand.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import spinner from '../../../../assets/spinner_v3.gif';
import avatar from '../../../../assets/img/Avatar.jpg';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';

const EditBrand = () => {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [picture, setPicture] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [brandName, setBrandName] = useState("");

    const handleSelectBrand = (brandId) => {
        let hasSelectedBrand = false;
        brands.forEach(c => {
            if (c.id === +brandId) {
                setBrandName(c.name);
                setPicture(c.image ? `data:image/png;base64, ${c.image}` : false);
                setSelectedBrand(c);
                hasSelectedBrand = true
                return c;
            }
        });
        if (!hasSelectedBrand) {
            setPicture(false)
            setSelectedBrand("");
            setBrandName("");
            setSelectedFile(false);
            return null;
        }
    };

    const onChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setPicture(URL.createObjectURL(event.target.files[0]));
    };

    const renderLoader = () => {
        return <div className={`${styles["loader"]}`}>
            <img className={styles['spinner']} src={spinner} alt="spinner" />
        </div>
    }

    const clearImage = () => {
        setSelectedFile(null);
        setPicture(null);
    }

    const submitImage = (id) => {
        if (selectedFile) {
            setIsLoading(true);
            const data = new FormData();
            if (selectedFile === null) {
                data.append("image", null);
            } else {
                data.append("image", selectedFile);
            }
            fetch(routes.brandPicture + `/${id}`, {
                method: 'POST',
                credentials: 'include',
                body: data
            })
                .then(res => {
                    if (res.status === 200) {
                        clearImage();
                    }
                    setIsLoading(false);
                    return res.json()
                })
                .then(res => {
                    setPicture(res.image ? `data:image/png;base64, ${res.image}` : false);
                    api.getAllBrands()
                        .then(res => setBrands(res))
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false)
                })
        }
        return;
    };

    const submitBrand = async () => {
        setIsLoading(true);
        api.editBrand(selectedBrand.id, { name: brandName })
            .then(res => {
                if (res.ok) {
                    brands.find(({ id }) => id === +selectedBrand.id).name = brandName;
                }
                setIsLoading(false);
                return res.json();
            })
            .then(res => {

                submitImage(res.id);

            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }


    const submit = (event) => {
        event.preventDefault();
        submitBrand();
    };

    useLayoutEffect(() => {
        api.getAllBrands()
            .then(res => setBrands(res))
    }, [])

    return <>
        <select className={`${styles["select-brand"]}`} onChange={(event) => handleSelectBrand(event.target.value)}>
            <option value={""} >Select a brand to edit:</option>
            {brands.map((element, index) => {
                return <option key={index} value={element.id}>{element.name}</option>
            })}
        </select>
        <div className={styles["brand-form"]}>
            <h1 className={styles["title"]}>
                Edit Brand
            </h1>
            <form>
                <Input
                    {...{
                        handleChange: (event) => setBrandName(event.target.value),
                        value: brandName,
                        placeholder: "Brand name...",
                    }}
                />
                <div className={`${styles["picture"]}`}>
                    {picture ? <img onDrop={onChangeHandler} src={picture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
                    {isLoading
                        ? renderLoader()
                        : <></>
                    }
                    <input onDrop={onChangeHandler} onChange={onChangeHandler} multiple type="file" />
                    <Button {...{
                        isLoading,
                        handleClick: clearImage,
                        text: "X",
                        type: "button",
                        colour: "red",
                        size: "small"
                    }} />
                </div>
                <Button {...{
                    isLoading,
                    handleClick: submit,
                    text: "Submit Brand",
                    type: "button",
                    isActive: selectedBrand
                }} />
            </form>
        </div>
    </>
};

export default EditBrand;