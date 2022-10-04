import React, { useState } from 'react';

import styles from './CreateBrand.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import spinner from '../../../../assets/spinner_v3.gif';
import avatar from '../../../../assets/img/Avatar.jpg';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';

const CreateBrand = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [brandName, setBrandName] = useState("");

    const submitImage = (id) => {
        setIsLoading(true);
        const data = new FormData();
        data.append("image", selectedFile);
        fetch(routes.brandPicture + `/${id}`, {
            method: 'POST',
            credentials: 'include',
            body: data
        })
            .then(res => {
                if (res.status === 200) {
                    setSelectedFile(null);
                    setImage(null);
                }
                setIsLoading(false);
                return res.json()
            })
            .then(res => {
                setImage(res.image ? `data:image/png;base64, ${res.image}` : false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false)
            })
    };

    const submitBrand = async () => {
        setIsLoading(true);
        api.createBrand({ name: brandName })
            .then(res => {
                if (res.ok) {
                    setBrandName("");
                }
                setIsLoading(false);
                return res.json();
            })
            .then(res => {
                if (selectedFile) {
                    submitImage(res.id)
                }
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