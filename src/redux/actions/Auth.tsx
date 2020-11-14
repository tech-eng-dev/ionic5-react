import { AuthTypes } from '../types';

interface LoginAction {
  type: typeof AuthTypes.LOGIN;
  payload: any
};

interface SetTokenAction {
  type: typeof AuthTypes.SET_TOKEN;
  payload: any
};

export type AuthActions = LoginAction | SetTokenAction;

export function login(param: any): AuthActions {
  return {
    type: AuthTypes.LOGIN,
    payload: param
  };
};

export function setToken(token: string): AuthActions {
  return {
    type: AuthTypes.SET_TOKEN,
    payload: token
  };
};
