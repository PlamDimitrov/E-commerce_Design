import React from 'react';
import styles from './NotFound.module.css';


const NotFound = () => {
    return <div className={styles["page-not-found"]}>
        <div className={styles["fof"]}>
            <h1>Error 404</h1>
        </div>
    </div>
};

export default NotFound;