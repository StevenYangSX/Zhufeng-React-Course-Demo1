import { legacy_createStore as createStore} from 'redux';


// 公共状态初始值
let initialState = {
    supNum : 10,
    oppNum : 5
};

/**
 * reducer:管理员 修改store容器中的状态
 * @param {object} state 状态
 * @param {object} action 每次基于dispatch派发的时候，传递的行为对象
 * @param {string} action.type action的行为表示
 * @return {object}  更新后的状态
 */
const reducer = function reducer(state = initialState,action){

    //! 浅克隆一份state  只拷贝第一层
    state = {...state};

    switch(action.type){
        case 'VOTE_SUP':
            state.supNum++;
            break;
        case 'VOTE_OPP':
            state.oppNum++;
            break;
        default:
            
    }

    return state;
}

const store = createStore(reducer);

export default store;