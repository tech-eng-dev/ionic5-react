import { takeEvery } from 'redux-saga/effects';
import { AuthTypes } from '../types';
import * as authSaga from './auth';

export default function* rootSaga() {
  yield takeEvery(AuthTypes.LOGIN, authSaga.login);
};
