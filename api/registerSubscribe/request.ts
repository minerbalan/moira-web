import fetchApi from "../../utils/fetchApi";
import axios from "axios";

export type RegisterSubscribeRequest = {
  url: string;
  name?: string;
};

export type RegisterSubscribeResponse = {
  isSuccess: boolean;
  errorMessage?: string;
};

export const registerSubscribeRequest = async (arg: RegisterSubscribeRequest): Promise<RegisterSubscribeResponse> => {
  try {
    await fetchApi("/subscriptions", "POST", arg);
    return { isSuccess: true };
  } catch (error) {
    let errorMessage = "エラーが発生しました";
    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
    }
    return { isSuccess: false, errorMessage: errorMessage };
  }
};
