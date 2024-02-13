import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import apiTokenSlice from '../slices/apiTokenSlice';
import employees from '../slices/employeeSlice';
import assetSlice from '../slices/assetSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  auth: apiTokenSlice,
  employee: employees,
  asset:assetSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

