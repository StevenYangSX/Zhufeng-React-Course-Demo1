/**
 * Voter 模块 派发的行为对象管理
 */
import * as TYPES from '../actionTypes';

const voterActions = {
    support(payload) {
        return  {
            type:TYPES.VOTE_SUP,
            payload
        }
    },
    oppose(payload) {
        return {
            type:TYPES.VOTE_OPP,
            payload
        }
    }
};
export default voterActions;