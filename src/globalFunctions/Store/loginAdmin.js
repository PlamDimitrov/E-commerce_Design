import api from "../../api";

import {
  loginSuccess,
  loginFailure,
} from "./actions";
import { hasError } from "./Store";

const loginAdmin = ({ user }) =>
  api
    .logInAdmin(user)
    .then((res) => {
      if (res.status === 401) {
        hasError = true;
      } else {
        hasError = false;
      }
      return res;
    })
    .then((res) => res.json())
    .then((res) => (hasError ? loginFailure(res) : loginSuccess(res)))
    .catch((error) => loginFailure(error));

export default loginAdmin;