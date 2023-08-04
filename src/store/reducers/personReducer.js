/**
 * person 模块 reducer 模板
 */

import deepClone from "../../utils/utils"
const initialState = {
    num:100,
    info:null
}

/**
 * reducer:管理员 修改store容器中的状态
 * @param {object} state 状态
 * @param {object} action 每次基于dispatch派发的时候，传递的行为对象
 * @param {string} action.type action的行为表示
 * @return {object}  更新后的状态
 */
export default function personReducer(state=initialState,action) {
    state = deepClone(state);
    switch(action.type) {
        case 'PERSON_INFO':
            state.info = action.payload; 
            break;
        default:
    }
    return state;
}
