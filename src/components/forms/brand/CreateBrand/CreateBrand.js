import React, { useState } from 'react';

import styles from './CreateBrand.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';

const CreateBrand = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [brandName, setBrandName] = useState("");

    const submitImage = async (id) => {
        setIsLoading(true);
        const data = new FormData();
        if (selectedFile === null) {
            data.append("image", null);
        } else {
            data.append("image", selectedFile);
        }
        try {
            const brandImageResponse = await fetch(routes.brandPicture + `/${id}`, {
                method: 'POST',
                credentials: 'include',
                body: data
            })
            if (brandImageResponse.ok) {
                setIsLoading(false);
                setSelectedFile(null);
                setImage(null);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const submitBrand = async () => {
        setIsLoading(true);
        try {
            const brandFromDb = await api.createBrand({ name: brandName });
            if (brandFromDb.ok) {
                setBrandName("");
                setIsLoading(false);
            }
            const brandsFromDb = await brandFromDb.json();
            if (selectedFile) {
                submitImage(brandsFromDb.id)
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }


    const submit = (event) => {
        event.preventDefault();
        submitBrand();
    };

    return <div className={styles["brand-form"]}>
        <h1 className={styles["title"]}>
            Create Brand
        </h1>
        <form>
            <Input
                {...{
                    handleChange: (event) => setBrandName(event.target.value),
                    value: brandName,
                    placeholder: "Brand name...",
                }}
            />
            <Image {...{
                image,
                isLoading,
                setSelectedFile
            }} />
            <Button {...{
                isLoading,
                handleClick: submit,
                text: "Submit Brand",
                type: "button"
            }} />
        </form>
    </div>
};

export default CreateBrand;