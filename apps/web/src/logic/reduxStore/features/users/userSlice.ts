import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    user: {}
    loading: boolean
    error: string
}

const initialState:InitialState = {
    user: {},
    loading: false,
    error: ''
}

type Data = {

}

export const userSignup = createAsyncThunk('userSignup', async(data: Data) => {
    try {

    } catch(err) {

    }
})

export const userLogin = createAsyncThunk('userlogin', async(data:Data) => {
    try {

    } catch(err) {

    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

    }
})


export default userSlice.reducer