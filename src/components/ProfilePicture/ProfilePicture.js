import React, { useEffect, useRef, useState } from 'react';

import styles from './ProfilePicture.module.css';

import { loginSuccessAdmin, loginSuccess } from '../../globalFunctions/Store/actions';
import { StoreContext } from '../../globalFunctions/Store/Store';
import routes from '../../api/apiRoutes';
import api from '../../api';

import avatar from '../../assets/img/Avatar.jpg';
import cookieParser from '../../globalFunctions/cookieParser';
import checkCurrentUser from '../../globalFunctions/checkCurrentUser';
import spinner from '../../assets/spinner_v3.gif';


const ProfilePicture = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  const [selectedFile, setSelectedFile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(false);
  const userId = useRef(null);
  const userType = useRef("");

  const setUserId = () => {
    if (userType.current === "User") {
      userId.current = cookieParser("user-info").Id;
    } else if (userType.current === "Admin") {
      userId.current = cookieParser("admin-info").Id;
    }
  };
  const getUser = () => {
    setIsLoading(true);
    switch (userType.current) {
      case "User":
        setUserId();
        api.getCurrentUser(userId.current)
          .then(res => res.json())
          .then(res => {
            setProfilePicture(res.image ? `data:image/png;base64, ${res.image}` : false)
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err)
            setIsLoading(false);
          });
        break;
      case "Admin":
        setUserId();
        api.getCurrentAdmin(userId.current)
          .then(res => res.json())
          .then(res => {
            setProfilePicture(res.image ? `data:image/png;base64, ${res.image}` : false)
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err)
            setIsLoading(false);
          });
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const updateUserState = (call, image) => {
    const user = { ...state.user };
    user.image = image;
    dispatch(call(user))
  }

  const submitImage = () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("image", selectedFile);
    switch (userType.current) {
      case "User":
        fetch(routes.userProfilePicture, {
          method: 'POST',
          credentials: 'include',
          body: data
        })
          .then(res => res.json())
          .then(res => {
            setProfilePicture(res.image ? `data:image/png;base64, ${res.image}` : false)
            updateUserState(loginSuccess, res.image);
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false)
          })
        break;
      case "Admin":
        fetch(routes.adminProfilePicture, {
          method: 'POST',
          credentials: 'include',
          body: data
        })
          .then(res => res.json())
          .then(res => {
            setProfilePicture(res.image ? `data:image/png;base64, ${res.image}` : false)
            updateUserState(loginSuccessAdmin, res.image);
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false)
          })
        break;
      default:
        break;
    };
    getUser();
  };

  const renderLoader = () => {
    return <div className={`${styles["loader"]}`}>
      <img className={styles['spinner']} src={spinner} alt="spinner" />
    </div>
  }

  useEffect(() => {
    userType.current = checkCurrentUser();
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedFile) {
      submitImage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile])

  return <div className={`${styles["profile-picture"]}`}>
    {profilePicture ? <img onDrop={onChangeHandler} src={profilePicture} alt="profile_picture" /> : <img src={avatar} alt="profile_picture" />}
    {isLoading
      ? renderLoader()
      : <></>
    }
    <input onDrop={onChangeHandler} onChange={onChangeHandler} multiple type="file" />
  </div>
};

export default ProfilePicture;