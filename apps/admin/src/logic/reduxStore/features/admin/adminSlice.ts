import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

type InitialState = { 
    admin: {}
    loading: boolean
    error: string
}

type Data = {
    email: string,
    password: string

}


const initialState:InitialState  = {
    admin: {},
    loading: false,
    error: ''
}

export const LoginAdmin = createAsyncThunk('loginAdmin', async(formdata:Data) => {
    try {
        const res = await fetch('http://localhost:3500/admin/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })

        const data = await res.json()
        console.log('admin login succesful')
        return data

    } catch (err: unknown) {
        if(err instanceof Error) {
            console.log('cannot login admin')
        }

    }
})


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(LoginAdmin.pending , (state) => {
            state.loading = true
        })
        .addCase(LoginAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.admin = action.payload;
          })
          .addCase(LoginAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    }
})

export default adminSlice.reducer