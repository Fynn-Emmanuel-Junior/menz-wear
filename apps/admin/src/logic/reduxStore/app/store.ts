import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import adminReducer  from '../features/admin/adminSlice'

const rootReducer = combineReducers({
    admin: adminReducer
})

// export type AppDispatch = typeof store.dispatch

const persistConfig =  {
    key:'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
})

export  const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch