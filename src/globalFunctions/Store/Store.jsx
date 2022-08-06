import React from "react";
import {
  ActionTypes,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  loginFailureAdmin,
  loginSuccessAdmin,
} from "./actions";
import api from "../../api";

import handleError from "../serverErrors"

export const StoreContext = React.createContext({});

const initialState = {
  user: undefined,
  error: null,
};

let hasError = false;

function init() {
  return initialState;
}

const loginAdminLogic = ({ user }) => {
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
    .then((res) => (hasError ? loginFailureAdmin(handleError(res.status)) : loginSuccessAdmin(res)))
    .catch((error) => loginFailureAdmin(error))
};

const asyncActionMap = {
  [ActionTypes.Login]: ({ user }) =>
    api
      .logInUser(user)
      .then((res) => {
        if (res.status === 401) {
          hasError = true;
          return res;
        } else {
          hasError = false;
          return res.json();
        }
      })
      .then((res) => (hasError ? loginFailure(handleError(res.status)) : loginSuccess(res)))
      .catch((error) => loginFailure(error)),
  [ActionTypes.Logout]: () =>
    api
      .logOutUser()
      .then(() => logoutSuccess())
      .catch((error) => logoutFailure(error)),
  [ActionTypes.LoginAdmin]: ({ user }) =>
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
      .then((res) => (hasError ? loginFailureAdmin(handleError(res.status)) : loginSuccessAdmin(res)))
      .catch((error) => loginFailureAdmin(error)),

  [ActionTypes.LogoutAdmin]: () =>
    api
      .logOutAdmin()
      .then(() => logoutSuccess())
      .catch((error) => logoutFailure(error)),
};

const actionMap = {
  [ActionTypes.Login]: (state) => ({ ...state, error: null }),
  [ActionTypes.LoginSuccess]: (state, { user }) => ({ ...state, user }),
  [ActionTypes.LogoutSuccess]: (state) => ({ ...state, user: null }),
  [ActionTypes.LoginFailure]: (state, { error }) => ({ ...state, error }),

  [ActionTypes.LoginAdmin]: (state) => ({ ...state, error: null }),
  [ActionTypes.LoginSuccessAdmin]: (state, { user }) => ({ ...state, user }),
  [ActionTypes.LogoutSuccessAdmin]: (state) => ({ ...state, user: null }),
  [ActionTypes.LoginFailureAdmin]: (state, { error }) => ({ ...state, error }),
};

const storeReducer = (state, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action.payload) : state;
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(storeReducer, initialState, init);

  const store = React.useMemo(
    () => ({
      state,
      dispatch: (action) => {
        const asyncActionHandler = asyncActionMap[action.type];
        if (asyncActionHandler) {
          asyncActionHandler(action.payload).then(dispatch)
            .catch(error => console.log(`asyncActionHandler problem: ${error}`));
        }
        dispatch(action);
      },
    }),
    [state, dispatch]
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
