/**
 * Voter 模块的reducer
 */
import deepClone from "../../utils/utils";
import * as TYPES from '../actionTypes';
const initialState = {
    supNum: 10,
    oppNum:5,
    num:0
}

/**
 * reducer:管理员 修改store容器中的状态
 * @param {object} state 状态
 * @param {object} action 每次基于dispatch派发的时候，传递的行为对象
 * @param {string} action.type action的行为表示
 * @return {object}  更新后的状态
 */
export default function voterReducer(state=initialState,action) {
    console.log("check payload....",action)
    state = deepClone(state);
    switch(action.type) {
        case TYPES.VOTE_SUP:
          
            state.supNum++;
            break;
        case TYPES.VOTE_OPP:
            state.oppNum++;
            break;
        default:
    }
    return state;
}
