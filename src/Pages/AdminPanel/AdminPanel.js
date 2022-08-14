import React, { useEffect, useRef, useState } from 'react';
import styles from './AdminPanel.module.css';
import global from '../../index.module.css';

import FileUploader from '../../components/FileUploader/FileUploader';

const AdminPanel = () => {

    return <div className={`${styles["admin-control-panel"]} ${global["content"]}`}>
        <FileUploader />
    </div >
};

export default AdminPanel;