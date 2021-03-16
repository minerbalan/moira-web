import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApi";

export type LoginRequest = {
    email: string,
    password: string
}

export const loginRequest = createAsyncThunk<void, LoginRequest>(
    'login/loginRequest',
    async (arg): Promise<void> => {
        const test = await fetchApi("/login", "POST", arg)
        console.log(test)
        const test2 = await fetchApi("/articles", "GET")
        console.log(test2)
    }
)