import {createSlice} from "@reduxjs/toolkit";
import {loginRequest} from "./asyncActions";

export type LoginState = {
    hasError: boolean,
    errorName: string,
    errorMessage: string,
    isLoading: boolean,
    isLogin: boolean
};

export const initialLoginState: LoginState = {
    errorMessage: "", errorName: "", hasError: false, isLoading: false, isLogin: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        initLoginState: () => {
            return initialLoginState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state) => ({
                ...state,
                isLoading: true,
                hasError: false,
                errorName: '',
                errorMessage: '',
                isLogin: false
            })
        )
        builder.addCase(loginRequest.rejected, (state, action) => ({
                ...state,
                isLoading: false,
                hasError: true,
                errorName: 'ログイン失敗',
                errorMessage: action.error.message ?? "",
                isLogin: false
            })
        )
        builder.addCase(loginRequest.fulfilled, (state) => {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errorName: '',
                errorMessage: '',
                isLogin: true
            }
        })
    }
})

export default loginSlice