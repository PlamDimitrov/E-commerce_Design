import React, { useLayoutEffect, useState } from 'react';

import styles from './CreateProduct.module.css';

import api from '../../../../api';
import routes from '../../../../api/apiRoutes';

import Button from '../../formComponents/Button/Button';
import Input from '../../formComponents/Input/Input';
import Image from '../../formComponents/Image/Image';
import { Link } from 'react-router-dom';

const initialProduct = {
    title: "",
    webId: "",
    price: "",
    description: "",
    condition: "",
    availability: false,
    featuredItem: false,
    recommended: false,
}

const CreateProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const [product, setProduct] = useState(initialProduct);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "categories") {
            if (e.target.checked) {
                if (product[name] === undefined) {
                    setProduct(current => {
                        current[name] = [];
                        current[name].push({ "CategoryId": +value });
                        return current;
                    });
                } else {
                    const newCategoryArray = product[name];
                    newCategoryArray.push({ "CategoryId": +value });
                    setProduct(current => ({ ...current, [name]: newCategoryArray }));
                }
            } else {
                const newCategoryArray = product[name];
                let index = -1;
                newCategoryArray
                    .forEach((c, i) => {
                        if (c["CategoryId"] === +value) {
                            index = i;
                        }
                    });
                if (index > -1) {
                    newCategoryArray.splice(index, 1);
                }
                setProduct(current => ({ ...current, [name]: newCategoryArray }));
            }
        } else if (e.target.type === "checkbox") {
            setProduct(current => ({ ...current, [name]: e.target.checked }));
        } else if (e.target.type === "radio") {
            setProduct(current => ({ ...current, "BrandId": +e.target.value }));
        } else {
            setProduct(current => ({ ...current, [name]: value }));
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
            const productImageResponse = await fetch(routes.productPicture + `/${id}`, {
                method: 'POST',
                credentials: 'include',
                body: data
            })
            if (productImageResponse.ok) {
                setIsLoading(false);
                setSelectedFile(null);
                setImage(null);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const submitProduct = async () => {
        setIsLoading(true);
        try {
            const productFromDb = await api.createProduct(product);
            if (productFromDb.ok) {
                setProduct(initialProduct)
                setIsLoading(false);
            }
            const productsFromDb = await productFromDb.json();
            if (selectedFile) {
                submitImage(productsFromDb.id)
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const submit = (event) => {
        event.preventDefault();
        submitProduct();
    };
    const getBrands = async () => {
        const resBrnds = await api.getAllBrands();
        const resCategories = await api.getAllCategories();
        if (resBrnds.ok) {
            const brandsFromDb = await resBrnds.json();
            setBrands(brandsFromDb);
        }
        if (resCategories.ok) {
            const categoriesFromDb = await resCategories.json();
            setCategories(categoriesFromDb);
        }
    };

    useLayoutEffect(() => {
        getBrands();
    }, [])

    return <div className={styles["brand-form"]}>
        <h1 className={styles["title"]}>
            Create Product
        </h1>
        <form>
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.title,
                placeholder: "Name...",
                name: "title"
            }}
            />
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.webId,
                placeholder: "WebId...",
                name: "webId",
            }}
            />
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.price,
                placeholder: "Price...",
                name: "price",
            }}
            />
            <textarea
                onChange={(event) => handleInputChange(event)}
                value={product.description}
                placeholder="Description..."
                name="description"
            >

            </textarea>
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.condition,
                placeholder: "Condition...",
                name: "condition"
            }}
            />
            <h1>Availability:</h1>
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.availability,
                placeholder: "Availability...",
                name: "availability",
                type: "checkbox"
            }}
            />
            <h1>FeaturedItem:</h1>
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.featuredItem,
                placeholder: "FeaturedItem...",
                name: "featuredItem",
                type: "checkbox"
            }}
            />
            <h1>Recommended:</h1>
            <Input {...{
                handleChange: (event) => handleInputChange(event),
                value: product.recommended,
                placeholder: "Recommended...",
                name: "recommended",
                type: "checkbox"
            }}
            />
            {brands.length > 0
                ? <fieldset>
                    <h2>Select a Brand:</h2>
                    {brands.map((brand, index) => {
                        return <div key={index}>
                            <Input  {...{
                                handleChange: (event) => handleInputChange(event),
                                value: brand.id,
                                name: "brand",
                                type: "radio",
                            }}
                            />
                            <span>{brand.name}</span>
                        </div>
                    })}

                </fieldset>
                : <Link target="_blank" to={'/admin/control-panel/create-brand'}>Create a Brand</Link>
            }
            {categories.length > 0
                ? <fieldset>
                    <h2>Select a Categories:</h2>
                    {categories.map((category, index) => {
                        return <div key={index}>
                            <Input  {...{
                                handleChange: (event) => handleInputChange(event),
                                value: category.id,
                                placeholder: "FeaturedItem...",
                                name: "categories",
                                type: "checkbox",
                            }}
                            />
                            <span>{category.name}</span>
                        </div>
                    })}
                </fieldset>
                : <Link target="_blank" to={'/admin/control-panel/create-category'}>Create a Category</Link>
            }
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

export default CreateProduct;