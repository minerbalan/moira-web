import {useSelector} from "react-redux";
import {CurrentUserState} from "../redux/currentUser/slice";

export function useCurrentUser() {
    const currentUser = useSelector((state: { currentUser: CurrentUserState }) => state.currentUser)
    const isLogin = currentUser.isLogin;

    return {
        isLogin, currentUser
    }
}