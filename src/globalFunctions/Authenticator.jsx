import React, { useEffect } from "react";
import { StoreContext } from "./Store/Store";
import { loginFailureAdmin, loginSuccessAdmin } from "./Store/actions";
import cookieParser from "./cookieParser";

const Auth = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    const userInfo = cookieParser("user-info");
    fetch("https://localhost:7044/api/Admins/auth", {
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
      .then((user) => dispatch(loginSuccessAdmin(user)))
      .catch((err) => {
        console.log(`Error from server: ${err}`);
        dispatch(loginFailureAdmin());
      });
  }, []);

  return <>{children}</>;
};

export default Auth;
