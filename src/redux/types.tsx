export type ActionType = {
  type: string;
  payload: any;
};

export const AuthTypes = {
  LOGIN: 'LOGIN',
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  LOADING: 'LOADING',
};

export type User = {
  token: string;
  username: string;
};
