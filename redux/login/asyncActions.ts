import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApi";

export type LoginRequest = {
  email: string;
  password: string;
};

export const loginRequest = createAsyncThunk<void, LoginRequest>(
  "login/loginRequest",
  async (arg): Promise<void> => {
    await fetchApi("/login", "POST", arg);
  }
);
