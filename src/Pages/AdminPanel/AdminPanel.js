import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import global from '../../index.module.css';

import UserProfile from '../UserProfile/UserProfile';
import NavMenu from '../../components/NavMenu/NavMenu';
import MainMenu from '../../components/forms/MainMenu/MainMenu';

const AdminPanel = () => {
    const items = [
        {
            title: "Menage profiles",
            address: "/",
            sub: [
                {
                    name: "Admin profiles",
                    links: [
                        {
                            text: "Create admin profile",
                            address: "/",
                        },
                        {
                            text: "Delete admin profile",
                            address: "",
                        },
                        {
                            text: "Edit admin profiles",
                            address: "/",
                        },
                    ]
                },
                {
                    name: "User profiles",
                    links: [
                        {
                            text: "Create user profile",
                            address: "/",
                        },
                        {
                            text: "Delete user profile",
                            address: "",
                        },
                        {
                            text: "Edit user profiles",
                            address: "/",
                        },
                    ]
                }
            ]
        },
        {
            title: "Main menu",
            address: "/",
            sub: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create menu",
                            address: "create-manu",
                        },
                        {
                            text: "Edit menu",
                            address: "edit-menu",
                        },
                        {
                            text: "Delete menu",
                            address: "delete-menu",
                        },
                    ],
                }
            ]
        },
        {
            title: "Brands",
            address: "/",
            sub: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create brand",
                            address: "/",
                        },
                        {
                            text: "Edit brand",
                            address: "/",
                        },
                        {
                            text: "Delete brand",
                            address: "/",
                        },
                    ],
                }
            ]
        },
        {
            title: "Category",
            address: "/",
            sub: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create category",
                            address: "/",
                        },
                        {
                            text: "Edit category",
                            address: "/",
                        },
                        {
                            text: "Delete category",
                            address: "/",
                        },
                    ],
                }
            ]
        },
        {
            title: "Product",

            address: "/",
            sub: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create product",
                            address: "/",
                        },
                        {
                            text: "Edit product",
                            address: "/",
                        },
                        {
                            text: "Delete product",
                            address: "/",
                        },
                    ],
                }
            ]
        },
        {
            title: "My profile",
            address: "profile",
            sub: []
        },
    ]

    return <div className={`${styles["admin-control-panel"]} ${global["content"]}`}>
        <div className={`${styles["navigation"]}`}>
            <NavMenu items={items} />
        </div>
        <Routes>
            <Route path='profile' element={<UserProfile />} />
            <Route path='create-manu' element={<MainMenu />} />

        </Routes>
    </div >
};

export default AdminPanel;