import {combineReducers} from "redux";
import loginSlice from "./login/slice";

const rootReducer = combineReducers({
    login: loginSlice.reducer
})

export default rootReducer;