import React, { useLayoutEffect, useState } from 'react';

import styles from './EditBrand.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';
import { imageProcesses } from '../../../../globalFunctions/imageProcesses';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';

const EditBrand = () => {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [brandName, setBrandName] = useState("");

    const handleSelectBrand = (brandId) => {
        let hasSelectedBrand = false;
        brands.forEach(b => {
            if (b.id === +brandId) {
                setBrandName(b.name);
                setImage(b.image ? b.image : false);
                setSelectedBrand(b);
                hasSelectedBrand = true
                return b;
            }
        });
        if (!hasSelectedBrand) {
            setImage(false)
            setSelectedBrand("");
            setBrandName("");
            setSelectedFile(false);
            return null;
        }
    };

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
                getAllBrands();
            }
            const brandFromDb = await brandImageResponse.json();
            setImage(brandFromDb.image ? `data:image/png;base64, ${brandFromDb.image}` : false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const submitBrand = async () => {
        setIsLoading(true);
        try {
            const res = await api.editBrand(selectedBrand.id, { name: brandName })
            if (res.ok) {
                brands.find(({ id }) => id === +selectedBrand.id).name = brandName;
            }
            setIsLoading(false);
            const responseContent = await res.json();
            await submitImage(responseContent.id);
        } catch (error) {
            console.log(error);
            setIsLoading(false);

        }
    }
    const getAllBrands = async () => {
        try {
            const brandsResponse = await api.getAllBrands()
            const brandsFromDb = await brandsResponse.json();
            setBrands(imageProcesses.convertToBase64(brandsFromDb));
        } catch (error) {
            console.log(error);
        }
    }

    const submit = (event) => {
        event.preventDefault();
        submitBrand();
    };

    useLayoutEffect(() => {
        getAllBrands();
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
                <Image {...{
                    image,
                    isLoading,
                    setSelectedFile
                }} />
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