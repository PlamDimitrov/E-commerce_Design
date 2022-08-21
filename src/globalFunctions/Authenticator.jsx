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

const Auth = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);

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

  useEffect(() => {
    if (checkCurrentUser() === "User") {
      const userInfo = cookieParser("user-info");
      userInfo.password = "****";
      authenticate(
        "https://localhost:7044/api/Users/auth",
        userInfo,
        loginSuccess,
        loginFailure
      );
    } else if (checkCurrentUser() === "Admin") {
      const adminInfo = cookieParser("admin-info");
      adminInfo.password = "****";
      authenticate(
        "https://localhost:7044/api/Admins/auth",
        adminInfo,
        loginSuccessAdmin,
        loginFailureAdmin
      );
    }
  }, []);

  return <>{children}</>;
};

export default Auth;
