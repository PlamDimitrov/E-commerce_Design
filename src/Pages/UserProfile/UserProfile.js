import React, { useEffect, useRef, useState } from 'react';
import styles from './UserProfile.module.css';
import global from '../../index.module.css';

import FileUploader from '../../components/FileUploader/FileUploader';

const UserProfile = () => {

    return <div className={`${styles["user-profile"]} ${global["content"]}`}>
        <FileUploader />
    </div >
};

export default UserProfile;