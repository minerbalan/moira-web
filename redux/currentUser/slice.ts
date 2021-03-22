import {createSlice} from "@reduxjs/toolkit";
import {fetchCurrentUserRequest} from "./asyncActions";

export type CurrentUserState = {
    isFetching: boolean,
    isLogin: boolean
    userName?: string
}

export const initialCurrentUserState: CurrentUserState = {
    isFetching: false,
    isLogin: false,
    userName: undefined
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: initialCurrentUserState,
    reducers: {
        setUserState: (state) => {
            if (state.isLogin && state.userName == undefined) {
                throw new Error("While logged in username cannot undefined")
            }

            return {...state}
        },

        logoutUser: (state) => {
            return {...state, isLogin: false, userName: undefined}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUserRequest.pending, (state) => {
            return {...state, isFetching: true}
        })
        builder.addCase(fetchCurrentUserRequest.rejected, (state) => {
            return {...state, isFetching: false, isLogin: false, userName: undefined}
        })
        builder.addCase(fetchCurrentUserRequest.fulfilled, (state, action) => {
            return {...state, isFetching: false, isLogin: true, userName: action.payload.username}
        })
    }
})

export default currentUserSlice