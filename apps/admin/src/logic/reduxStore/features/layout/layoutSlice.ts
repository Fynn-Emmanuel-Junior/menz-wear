import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: {}
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setPage: (state,action) => {
            state.page = action.payload
        }
    }

})

export const selectPage = (state: any) => state.page.page

export const {setPage} = layoutSlice.actions

export default layoutSlice.reducer