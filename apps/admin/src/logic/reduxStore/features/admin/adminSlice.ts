import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

type InitialState = { 
    admin: {}
    loading: boolean
    error: string
}

type Data = {

}


const initialState:InitialState  = {
    admin: {},
    loading: false,
    error: ''
}

export const signupAdmin = createAsyncThunk('signupAdmin', async(data:Data) => {
    try {
        const res = await fetch('')
    } catch (err) {

    }
})

export const loginAdmin = createAsyncThunk('loginAdmin', async(data:Data) => {
    try {

    } catch (err) {}
})

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

    }
})

export default adminSlice.reducer