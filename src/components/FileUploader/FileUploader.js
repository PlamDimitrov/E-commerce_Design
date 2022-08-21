import React, { useEffect, useRef, useState } from 'react';
import { StoreContext } from "../../globalFunctions/Store/Store";

import styles from './FileUploader.module.css';
import globalStyles from '../../index.module.css';

import api from '../../api';

import avatar from '../../assets/img/Avatar.jpg';
import cookieParser from '../../globalFunctions/cookieParser';
import checkCurrentUser from '../../globalFunctions/checkCurrentUser';


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const userId = useRef(null);

  const setUserId = () => {
    const userType = checkCurrentUser();
    if (userType === "User") {
      userId.current = cookieParser("user-info").Id;
    } else if (userType === "Admin") {
      userId.current = cookieParser("admin-info").Id;
    }
  };
  const getUser = () => {
    setUserId();
    api.getCurrentAdmin(userId.current)
      .then(res => res.json())
      .then(res => setProfilePicture(`data:image/png;base64, ${res.image}`));
  }

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onClickHandler = () => {
    const data = new FormData();
    console.log('test');
    data.append("image", selectedFile);
    fetch("https://localhost:7044/api/Admins/uploadProfilePicture", {
      method: 'POST',
      credentials: 'include',
      body: data
    })
      .then(res => res.json())
      .then(res => setProfilePicture(`data:image/png;base64, ${res.image}`))
    getUser();
  };

  useEffect(() => {
    getUser();
  }, [])

  return <div className={`${styles["profile-pucture"]} ${globalStyles["content"]}`}>
    <input onChange={onChangeHandler} multiple className='input' type="file" />
    <button type='button' onClick={onClickHandler}>Submit</button>
    <div className={`${styles["input-drop"]}`}>
      <input onDrop={onChangeHandler} onChange={onChangeHandler} multiple type="file" />
      {!!profilePicture ? <img onDrop={onChangeHandler} src={profilePicture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
    </div>
  </div >
};

export default FileUploader;