import {configureStore} from '@reduxjs/toolkit'

import adminReducer  from '../features/admin/adminSlice'


export const store =  configureStore({
    reducer: {
        admin: adminReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch