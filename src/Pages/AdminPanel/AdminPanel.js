import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import global from '../../index.module.css';

import UserProfile from '../UserProfile/UserProfile';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

const AdminPanel = () => {

    return <div className={`${styles["admin-control-panel"]} ${global["content"]}`}>
        <ul>
            <li><Link to={"profile"}>Pofile</Link></li>
            <li><Link to={"admins"}>Admin's acounts</Link></li>
            <li><Link to={"product-create"}>Create product</Link></li>
            <li><Link to={"brand-create"}>Create Brand</Link></li>
            <li><Link to={"menu-main"}>Main menu</Link></li>
            <li><Link to={"menu-secpndary"}>Secondary navigation</Link></li>
        </ul>
        <Routes>
            <Route path='/profile' element={<UserProfile />} />
        </Routes>
    </div >
};

export default AdminPanel;