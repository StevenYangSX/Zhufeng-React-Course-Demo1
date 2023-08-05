/**
 * voter模块的切片  切片包含 reducer 和  actionCreator
 */

import { createSlice } from "@reduxjs/toolkit";

const voterSlice = createSlice({
    name:'voter',
    // 此切片对应reducer中的初始状态
    initialState:{
        supNum:10,
        oppNum:5,
        // example only
        taskList:null
    },
    // 编写不同业务逻辑下 对公共状态的修改
    reducers:{
        /**
         * 
         * @param {object} state  redux中的公共状态信息
         * @param {object} action 派发的行为对象 无需考虑 行为标识 action.payload为其他信息
         */
        getAllTaskList(state, action) {
             state.taskList = action.payload
        },
        voteSup(state,action) {
            console.log("what is this action here..!!!!!!",action)
            state.supNum ++;
        }
    }
})
// actionCreator  voteSup() 执行 返回  派发行为对象
export let {voteSup, getAllTaskList} = voterSlice.actions


// 实现异步派发
export const getAllTaskListAsync = () =>{
    return async  dispatch => {
        let list = [];
        try {
          
            list = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
           

        } catch (error) {
             console.log("@@@@@@",error)
        } 
        dispatch(getAllTaskList(list));
    }
}
// 如果异步派发
export default voterSlice.reducer;