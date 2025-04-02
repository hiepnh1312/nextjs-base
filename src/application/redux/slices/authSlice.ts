import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi} from "@/infrastructure/api/auth.api";
import {LoginPayload} from "@/domain/auth";

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }: LoginPayload) => {
        return await authApi.login(username, password);
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state) => {
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default authSlice.reducer;
