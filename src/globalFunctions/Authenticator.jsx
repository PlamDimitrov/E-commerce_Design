import React, { useEffect } from 'react';
import { StoreContext } from "./Store/Store";
import { loginFailureAdmin, loginSuccess, loginSuccessAdmin } from "./Store/actions";
import cookieParser from './cookieParser';

const Auth = ({ children }) => {
    useEffect(() => {
        const cookie = cookieParser("ecom-auth-token");
        console.log(cookie);

    }, [])
    const { dispatch } = React.useContext(StoreContext);
    React.useEffect(() => {
        fetch("https://localhost:7044/api/Admins/auth", { credentials: "include" })
            .then(res =>
                res.status === 200
                    ? res.json()
                    : res.text().then(text => Promise.reject(text))
            )
            .then(user => dispatch(loginSuccessAdmin(user)))
            .catch((err) => {
                console.log(`Error from server: ${err}`);
                dispatch(loginFailureAdmin());
            });
    }, []);

    return <>{children}</>;
};

export default Auth;