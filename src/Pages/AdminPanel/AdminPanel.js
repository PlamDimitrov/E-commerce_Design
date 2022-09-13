import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import global from '../../index.module.css';

import UserProfile from '../UserProfile/UserProfile';
import NavMenu from '../../components/NavMenu/NavMenu';
import CreateMainMenu from '../../components/forms/CreateMainMenu/CreateMainMenu';
import EditMainMenu from '../../components/forms/EditMainMenu/EditMainMenu';
import NotFound from '../../Pages/NotFound/NotFound';

const AdminPanel = () => {
    const adminMenu = [
        {
            title: "Menage profiles",
            address: "/",
            subMenus: [
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
            subMenus: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create menu",
                            address: "create-menu",
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
            subMenus: [
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
            subMenus: [
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
            subMenus: [
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
            subMenus: []
        },
    ]

    return <div className={`${styles["admin-control-panel"]} ${global["content"]}`}>
        <div className={`${styles["navigation"]}`}>
            <NavMenu items={adminMenu} />
        </div>
        <Routes>
            <Route path='profile' element={<UserProfile />} />
            <Route path='create-menu' element={<CreateMainMenu />} />
            <Route path='edit-menu' element={<EditMainMenu />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div >
};

export default AdminPanel;