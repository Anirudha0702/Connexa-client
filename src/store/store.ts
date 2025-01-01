import { configureStore } from '@reduxjs/toolkit'
import { themeReducer,authReducer } from './slices'
import {persistReducer} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import persistConfig from '../configs/persist.config'

const reducer=combineReducers({
  theme:themeReducer,
    auth:authReducer
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch