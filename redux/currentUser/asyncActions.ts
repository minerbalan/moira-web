import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApi";

export type CurrentUserResponse = {
  username: string;
};

export const fetchCurrentUser = createAsyncThunk<CurrentUserResponse, void>(
  "currentUser/fetchCurrentUser",
  async (): Promise<CurrentUserResponse> => {
    const responseData = await fetchApi<CurrentUserResponse>("/current/user", "GET");
    return { username: responseData.data.username };
  }
);

export const logoutUser = createAsyncThunk<void, void>(
  "currentUser/logoutUser",
  async (): Promise<void> => {
    await fetchApi("/logout", "POST");
  }
);
