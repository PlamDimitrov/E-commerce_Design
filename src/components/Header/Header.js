import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import globalStyles from '../../index.module.css';

import { logout, logoutAdmin } from "../../globalFunctions/Store/actions";
import product from '../../assets/img/product.png';
import { StoreContext } from "../../globalFunctions/Store/Store";
import checkCurrentUser from "../../globalFunctions/checkCurrentUser";


const Header = () => {
    const { state, dispatch } = React.useContext(StoreContext);
    const [userLink, setUserLink] = useState(null);
    const [user, setUser] = useState(null);
    const userType = useRef("");

    const logOut = () => {
        let currentUser = checkCurrentUser();
        if (currentUser === "User") {
            dispatch(logout());
        } else if (currentUser === "Admin") {
            dispatch(logoutAdmin());
        }
    }

    const getUserLink = () => {
        switch (userType.current) {
            case "User":
                setUserLink("/user/profile-page");
                break;
            case "Admin":
                setUserLink("/admin/control-panel");
                break;

            default:
                break;
        }
    }

    const userLoggedIn = () => {
        return <>
            <Link className={styles["header-item"]} to={`${userLink}`}>Welcome, {user.userName}</Link>
            <Link onClick={logOut} className={styles["header-item"]} to="#">Logout</Link>
        </>
    }

    const userNotLoggedIn = () => {
        return <>
            <Link className={styles["header-item"]} to="/sign-in-or-register">Register</Link>
            <Link className={styles["header-item"]} to="/sign-in-or-register">Sign in</Link>
        </>
    }

    const removeItem = () => {
        console.log(state);
    }

    useEffect(() => {
        userType.current = checkCurrentUser();
        setUser(state.user);
        getUserLink();
    }, [state])

    return <div className={styles["header"]}>
        <div className={globalStyles["content"]}>
            <div className={styles["header-item-container"]}>
                {user ? userLoggedIn() : userNotLoggedIn()}
                <div className={styles["shoping-cart"]}>
                    <Link to="/checkout">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className={styles["shoping-status"]} >1 item  <i className="fa-solid fa-chevron-down"></i></span>
                    </Link>

                    <div className={styles["dropdown"]}>
                        <h1 className={styles["dropdown-title"]}>Products:</h1>
                        <div className={styles["dropdown-categories"]}>
                            <img className={styles["product-image"]} src={product} alt="product" />
                            <h1 className={styles["product-title"]}>Ave classic sweatshirt</h1>
                            <span className={styles["product-quantity"]}>
                                999
                                <span className={styles["product-dimension"]}>
                                    pc.
                                </span>
                            </span>
                            <span className={styles["product-price"]}>
                                12365
                                <span className={styles["product-currency"]}>
                                    лв.
                                </span>
                            </span>
                            <div className={styles["product-remove"]}>
                                <i onClick={removeItem} className="fa-solid fa-rectangle-xmark"></i>
                            </div>
                        </div>
                        <div className={`${styles["dropdown-categories"]} ${styles["total"]}`}>
                            <h1 className={styles["product-title"]}>Total:</h1>
                            <span className={styles["product-price"]}>
                                9999
                                <span className={styles["product-currency"]}>
                                    лв.
                                </span>
                            </span>
                        </div>
                        <Link className={styles["go-to-cart"]} to='/checkout'>Go to cart <i className="fa-solid fa-arrow-right-long"> <i className="fa-solid fa-cart-arrow-down"></i></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Header;