import { useSelector } from "react-redux";
import { CurrentUserState } from "../redux/currentUser/slice";

export const useCurrentUser = (): {
  isLogin: boolean;
  /** 一度でもfetchが完了したかどうか */
  isFetched: boolean;
  currentUser: CurrentUserState;
} => {
  const currentUser = useSelector((state: { currentUser: CurrentUserState }) => state.currentUser);
  const isLogin = currentUser.isLogin;
  const isFetched = currentUser.isFetched;

  return {
    isLogin,
    isFetched,
    currentUser,
  };
};
