import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "reduxjs-toolkit-persist";
import storage from 'reduxjs-toolkit-persist/lib/storage';

import {
  EqualityFn,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

import todosSlice from "../domain/usecases/todos-slice";
import settingsSlice from "../domain/usecases/settings-slice";

export const reducer = combineReducers({
  todos: todosSlice,
  settings: settingsSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useDispatch = () => useDispatchBase<AppDispatch>()

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: EqualityFn<TSelected> | undefined
): TSelected => useSelectorBase<RootState, TSelected>(selector, equalityFn);