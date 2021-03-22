import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApi";

export type CurrentUserRequest = {
    username: string
}

export const fetchCurrentUserRequest = createAsyncThunk<CurrentUserRequest, void>(
    'currentUser/fetchCurrentUserRequest',
    async (): Promise<CurrentUserRequest> => {
        const responseData = await fetchApi("/current/user", "GET")
        return {username: responseData.data.username}
    })