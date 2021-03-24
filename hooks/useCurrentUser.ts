import { useSelector } from "react-redux";
import { CurrentUserState } from "../redux/currentUser/slice";

export const useCurrentUser = (): { isLogin: boolean; currentUser: CurrentUserState } => {
  const currentUser = useSelector((state: { currentUser: CurrentUserState }) => state.currentUser);
  const isLogin = currentUser.isLogin;

  return {
    isLogin,
    currentUser,
  };
};
