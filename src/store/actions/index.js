/**
 * 将所有模块的actions 合并为一个aciton
 */

import voterActions from "./voterActions";
import personActions from "./personActions";

const action = {
    voter:voterActions,
    person:personActions
}

export default action;