import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";


const initialState  = {
    admin: {},
    loading: false,
    error: ''
}

export const LoginAdmin = createAsyncThunk('loginAdmin', async(formdata: any) => {
    try {
        const response = await fetch('http://localhost:3500/admin/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })

        return response;

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
            state.admin = action.payload as any
          })
          .addCase(LoginAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message as any
          });
    }
})

export const selectAdmin = (state: any) => state.admin.admin

export default adminSlice.reducer