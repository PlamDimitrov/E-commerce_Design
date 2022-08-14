export const ActionTypes = {
  Login: Symbol("[AUTH] Login"),
  LoginSuccess: Symbol("[AUTH] Login Success"),
  LoginFailure: Symbol("[AUTH] Login Failure"),

  Logout: Symbol("[AUTH] Logout"),
  LogoutSuccess: Symbol("[AUTH] Logout Success"),
  LogoutFailure: Symbol("[AUTH] Logout Failure"),

  LoginAdmin: Symbol("[AUTH] Login"),
  LoginSuccessAdmin: Symbol("[AUTH] Login Success"),
  LoginFailureAdmin: Symbol("[AUTH] Login Failure"),

  LogoutAdmin: Symbol("[AUTH] Logout"),
  LogoutSuccessAdmin: Symbol("[AUTH] Logout Success"),
  LogoutFailureAdmin: Symbol("[AUTH] Logout Failure"),
};

export const login = (user) => ({ type: ActionTypes.Login, payload: { user } });
export const loginFailure = (error) => ({ type: ActionTypes.LoginFailure, payload: { error } });
export const loginSuccess = (user) => ({ type: ActionTypes.LoginSuccess, payload: { user } });

export const logout = () => ({ type: ActionTypes.Logout, payload: undefined });
export const logoutFailure = (error) => ({ type: ActionTypes.LogoutFailure, payload: { error } });
export const logoutSuccess = () => ({ type: ActionTypes.LogoutSuccess, payload: undefined });

export const loginAdmin = (user) => ({ type: ActionTypes.LoginAdmin, payload: { user } });
export const loginFailureAdmin = (error) => ({ type: ActionTypes.LoginFailureAdmin, payload: { error } });
export const loginSuccessAdmin = (user) => ({ type: ActionTypes.LoginSuccessAdmin, payload: { user, isAdmin: true } });

export const logoutAdmin = () => ({ type: ActionTypes.LogoutAdmin, payload: undefined });
export const logoutFailureAdmin = (error) => ({ type: ActionTypes.LogoutFailureAdmin, payload: { error } });
export const logoutSuccessAdmin = () => ({ type: ActionTypes.LogoutSuccessAdmin, payload: undefined });