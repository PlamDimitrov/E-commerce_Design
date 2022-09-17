import React, { useEffect, useState } from 'react';
import styles from './UserProfile.module.css';
import global from '../../index.module.css';

import { StoreContext } from "../../globalFunctions/Store/Store";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

const UserProfile = () => {
    const { state } = React.useContext(StoreContext);
    const [user, setUser] = useState("<Link to={user.email}>{user.email}</Link>");

    useEffect(() => {
        if (state.user) {
            setUser(state.user);
        }
    }, [state])

    return <div className={`${styles["user-profile"]} ${global["content"]}`}>
        <ProfilePicture />
        <div className={`${styles["properties"]}`}>
            <span className={`${styles["property"]}`}>Username: <p className={`${styles['property-content']}`}>{user.userName}</p> </span>
            <span className={`${styles["property"]}`}>Email: <a className={`${styles['property-content']}`} href={`mailto:"${user.email ? user.email : ""}"`}>{user.email}</a></span>
            <span className={`${styles["property"]}`}>Username: <p className={`${styles['property-content']}`}>{user.userName}</p> </span>
            <span className={`${styles["property"]}`}>Username: <p className={`${styles['property-content']}`}>{user.userName}</p> </span>
            <span className={`${styles["property"]}`}>Username: <p className={`${styles['property-content']}`}>{user.userName}</p> </span>
        </div>
    </div>
};

export default UserProfile;