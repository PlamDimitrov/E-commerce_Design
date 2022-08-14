import React, { useEffect, useRef, useState } from 'react';
import { StoreContext } from "../../globalFunctions/Store/Store";
import styles from './FileUploader.module.css';
import api from '../../api';


const FileUploader = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState(null);

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onClickHandler = () => {
    const data = new FormData();
    data.append("image", selectedFile);
    fetch("https://localhost:7044/api/Admins/uploadProfilePicture", {
      method: 'POST',
      // headers: { 'Content-Type': 'image/jpeg' },
      credentials: 'include',
      body: data
    })
      .then(res => res.json())
      .then(res => setImg(`data:image/png;base64, ${res.image}`))
  };

  return <div >
    <input onChange={onChangeHandler} multiple className='input' type="file" />
    <button type='button' onClick={onClickHandler}>Submit</button>
    <img src={img} alt="sd" />
  </div >
};

export default FileUploader;