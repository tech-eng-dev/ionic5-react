import { ActionType, AuthTypes, User } from '../types';

export interface AuthState {
  user?: User;
  loading: boolean;
  token: string
};

const initialAuthState: AuthState = {
  user: undefined,
  token: '',
  loading: false,
};

export function authReducer(state = initialAuthState, action: ActionType) {
  switch (action.type) {
    case AuthTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AuthTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
