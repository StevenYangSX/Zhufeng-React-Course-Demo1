/**
 * 合并各个模块的reducer
 */
import { combineReducers } from "redux";
import voterReducer from "./voterReducer";
import personReducer from "./personReducer";

const reducer = combineReducers({
    voter:voterReducer,
    person:personReducer
})

export default reducer;