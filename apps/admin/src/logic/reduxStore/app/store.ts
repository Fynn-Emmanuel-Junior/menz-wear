import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

const persistConfig =  {
    key:'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store =  {
    reducer: {},
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
}

export  const persistor = persistStore(store)