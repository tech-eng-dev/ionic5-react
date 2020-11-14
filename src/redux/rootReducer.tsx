import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './reducers/Auth';
import rootSaga from './sagas';

export const overallReducer = combineReducers({
	auth: authReducer
} as any);

// Sage Middleware is used for fetching external resources.
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
	key: 'root',
	storage
};
const persistedReducer = persistReducer(persistConfig, overallReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store as any);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof overallReducer>;
