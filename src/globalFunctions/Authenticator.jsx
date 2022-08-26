import React, { useEffect } from "react";
import { StoreContext } from "./Store/Store";
import {
  loginFailureAdmin,
  loginSuccessAdmin,
  loginFailure,
  loginSuccess,
} from "./Store/actions";
import cookieParser from "./cookieParser";
import checkCurrentUser from "./checkCurrentUser";
import api from "../api";

const Auth = ({ children }) => {
  const { state, dispatch } = React.useContext(StoreContext);

  useEffect(() => {
    const authenticate = (route, userInfo, sucsess, failure) => {
      fetch(route, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
        method: "POST",
      })
        .then((res) =>
          res.status === 200
            ? res.json()
            : res.text().then((text) => Promise.reject(text))
        )
        .then((user) => dispatch(sucsess(user)))
        .catch((err) => {
          console.log(`Error from server: ${err}`);
          dispatch(failure());
        });
    };

    if (checkCurrentUser() === "User") {
      const userFromCookie = cookieParser("user-info");
      console.log(userFromCookie);
      authenticate(
        "https://localhost:7044/api/Users/auth",
        userFromCookie,
        loginSuccess,
        loginFailure
      );
    } else if (checkCurrentUser() === "Admin") {
      const adminFromCookie = cookieParser("admin-info");
      authenticate(
        "https://localhost:7044/api/Admins/auth",
        adminFromCookie,
        loginSuccessAdmin,
        loginFailureAdmin
      );
    }
  }, []);

  return <>{children}</>;
};

export default Auth;
