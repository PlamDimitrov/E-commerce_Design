import {
  loginFailureAdmin,
  loginSuccessAdmin,
} from "./actions";

const loginAdminLogic = ({ user }) =>
  api
    .logInAdmin(user)
    .then((res) => {
      if (res.status === 401) {
        hasError = true;
        return res;
      } else {
        hasError = false;
        return res.json();
      }
    })
    .then((res) =>
      hasError
        ? loginFailureAdmin(handleError(res.status))
        : loginSuccessAdmin(res)
    )
    .catch((error) => loginFailureAdmin(error));

export default loginAdminLogic;