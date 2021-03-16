import {createSlice} from "@reduxjs/toolkit";
import {loginRequest} from "./asyncActions";

export type LoginState = {
    hasError: boolean,
    errorName: string,
    errorMessage: string,
    isLoading: boolean,
    isLogin: boolean
};

const initialState: LoginState = {
    errorMessage: "", errorName: "", hasError: false, isLoading: false, isLogin: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state) => ({
                ...state,
                isLoading: true,
                hasError: false,
                errorName: '',
                errorMessage: ''
            })
        )
        builder.addCase(loginRequest.rejected, (state, action) => ({
                ...state,
                isLoading: false,
                hasError: true,
                errorName: 'ログイン失敗',
                errorMessage: action.error.message ?? ""
            })
        )
        builder.addCase(loginRequest.fulfilled, (state) => ({
            ...state,
            isLoading: false,
            hasError: false,
            errorName: '',
            errorMessage: ''
        }))
    }
})

export default loginSlice