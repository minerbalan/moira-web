import {combineReducers} from "redux";
import loginSlice from "./login/slice";
import currentUserSlice from "./currentUser/slice";

const rootReducer = combineReducers({
    currentUser: currentUserSlice.reducer,
    login: loginSlice.reducer
})

export default rootReducer;