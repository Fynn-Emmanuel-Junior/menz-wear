import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'


type InitialState = {
    user: {}
    loading: boolean
    error: string
}

type Data = {

}

const initialState:InitialState = {
    user: {},
    loading: false,
    error: ''
}

export  const userSignup = createAsyncThunk('userSignup', async(data:Data) => {
    try {

    } catch(err) {

    }
})

export const userLogin = createAsyncThunk('userLogin', async(data:Data) => {
    try {

    } catch(err) {

    }
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

    }
})

export  default userSlice.reducer