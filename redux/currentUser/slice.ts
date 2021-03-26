import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, logoutUser } from "./asyncActions";

export type CurrentUserState = {
  isFetching: boolean;
  isLogin: boolean;
  userName?: string;
  isLogout: boolean;
  logoutErrorMessage?: string;
};

export const initialCurrentUserState: CurrentUserState = {
  isFetching: false,
  isLogin: false,
  userName: undefined,
  isLogout: false,
  logoutErrorMessage: undefined,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialCurrentUserState,
  reducers: {
    setUserState: (state) => {
      if (state.isLogin && state.userName == undefined) {
        throw new Error("While logged in username cannot undefined");
      }

      return { ...state };
    },

    resetLogoutErrorMessage: (state) => {
      return { ...state, logoutErrorMessage: undefined };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      return { ...state, isFetching: true };
    });
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      return { ...state, isFetching: false, isLogin: false, userName: undefined };
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      return { ...state, isFetching: false, isLogin: true, userName: action.payload.username };
    });
    builder.addCase(logoutUser.rejected, (state) => {
      return { ...state, logoutErrorMessage: "ログアウト中にエラーが発生しました" };
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      return { ...state, isLogout: true };
    });
  },
});

export default currentUserSlice;
