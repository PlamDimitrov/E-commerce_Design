import React, { useEffect } from "react";
import { StoreContext } from "./Store/Store";
import {
  loginFailureAdmin,
  loginSuccessAdmin,
  loginFailure,
  loginSuccess,
} from "./Store/actions";
import cookieParser from "./cookieParser";

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

  React.useEffect(() => {
    const hasUserCookie = !!document.cookie.match(
      /^(.*;)?\s*user-info\s*=\s*[^;]+(.*)?$/
    );
    const hasAdminCookie = !!document.cookie.match(
      /^(.*;)?\s*admin-info\s*=\s*[^;]+(.*)?$/
    );
    if (hasUserCookie) {
      const userInfo = cookieParser("user-info");
      authenticate(
        "https://localhost:7044/api/Users/auth",
        userInfo,
        loginSuccessAdmin,
        loginFailureAdmin
      );
    } else if (hasAdminCookie) {
      const adminInfo = cookieParser("admin-info");
      authenticate(
        "https://localhost:7044/api/Admins/auth",
        adminInfo,
        loginSuccess,
        loginFailure
      );
    }
  }, []);

  return <>{children}</>;
};

export default Auth;
