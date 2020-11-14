import { call, put, all } from 'redux-saga/effects';
import { API } from '../../services/api';
import { ActionType, AuthTypes } from '../types';

export function* login(action: ActionType) {
  try {
    yield put({
      type: AuthTypes.LOADING,
      payload: true
    });
    const result = yield call(API.login, action.payload);
    if (result.data) {
      yield all([
        put({
          type: AuthTypes.SET_USER,
          payload: result.data.user
        }),
        put({
          type: AuthTypes.SET_TOKEN,
          payload: result.data.token
        }),
        put({
          type: AuthTypes.LOADING,
          payload: false
        })
      ]);
    } else {
      yield put({
        type: AuthTypes.LOADING,
        payload: false
      });
    }
  } catch (error) {
    yield put({
      type: AuthTypes.LOADING,
      payload: false
    });
    console.error(error);
  }
};
