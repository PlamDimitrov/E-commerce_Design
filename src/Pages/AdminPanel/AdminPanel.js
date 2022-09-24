import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import global from '../../index.module.css';

import UserProfile from '../UserProfile/UserProfile';
import NavMenu from '../../components/NavMenu/NavMenu';
import CreateMainMenu from '../../components/forms/mainMenu/CreateMainMenu/CreateMainMenu';
import EditMainMenu from '../../components/forms/mainMenu/EditMainMenu/EditMainMenu';
import NotFound from '../../Pages/NotFound/NotFound';
import DeleteMainMenu from '../../components/forms/mainMenu/DeleteMainMenu/DeleteMainMenu';
import CreateCategory from '../../components/forms/category/CreateCategory/CreateCategory';
import EditCategory from '../../components/forms/category/EditCategory/EditCategory';
import DeleteCategory from '../../components/forms/category/DeleteCategory/DeleteCategory';

const AdminPanel = () => {
    const adminMenu = [
        {
            title: "Menage profiles",
            address: "create-admin",
            subMenus: [
                {
                    name: "Admin profiles",
                    links: [
                        {
                            text: "Create admin profile",
                            address: "create-admin",
                        },
                        {
                            text: "Edit admin profiles",
                            address: "edit-admin",
                        },
                        {
                            text: "Delete admin profile",
                            address: "delete-admin",
                        },
                    ]
                },
                {
                    name: "User profiles",
                    links: [
                        {
                            text: "Create user profile",
                            address: "create-user",
                        },
                        {
                            text: "Edit user profiles",
                            address: "edit-user",
                        },
                        {
                            text: "Delete user profile",
                            address: "delete-user",
                        },
                    ]
                }
            ]
        },
        {
            title: "Main menu",
            address: "create-menu",
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
            address: "create-brand",
            subMenus: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create brand",
                            address: "create-brand",
                        },
                        {
                            text: "Edit brand",
                            address: "edit-brand",
                        },
                        {
                            text: "Delete brand",
                            address: "delete-brand",
                        },
                    ],
                }
            ]
        },
        {
            title: "Category",
            address: "create-category",
            subMenus: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create category",
                            address: "create-category",
                        },
                        {
                            text: "Edit category",
                            address: "edit-category",
                        },
                        {
                            text: "Delete category",
                            address: "delete-category",
                        },
                    ],
                }
            ]
        },
        {
            title: "Product",
            address: "create-product",
            subMenus: [
                {
                    name: "Actions",
                    links: [
                        {
                            text: "Create product",
                            address: "create-product",
                        },
                        {
                            text: "Edit product",
                            address: "edit-product",
                        },
                        {
                            text: "Delete product",
                            address: "delete-product",
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
            <Route path='create-category' element={<CreateCategory />} />
            <Route path='edit-category' element={<EditCategory />} />
            <Route path='delete-category' element={<DeleteCategory />} />
            <Route path='edit-menu' element={<EditMainMenu />} />
            <Route path='delete-menu' element={<DeleteMainMenu />} />
            <Route path='create-menu' element={<CreateMainMenu />} />
            <Route path='edit-menu' element={<EditMainMenu />} />
            <Route path='delete-menu' element={<DeleteMainMenu />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div >
};

export default AdminPanel;