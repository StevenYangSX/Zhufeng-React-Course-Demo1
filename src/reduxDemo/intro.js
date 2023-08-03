/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */


// 1. 创建公共容器: 公共状态 和 事件池(方法)
const store = createStore([reducer]);

// 2. 在组件内部，获取公共状态，然后渲染
store.getState() 

// 3. 把让组件可以更新的方法，放在公共容器的事件池中！
store.subscribe(aMethod);

// 4. 创建容器的时候，传递的  reducer: function
let initialState = {};

/**
*	@param {object} state
*	@param {object} action 派发的行为对象
*/
const reducer = function reducer(state = initialState, action) {
     switch(action.type) {
     	// change state based on type..... 
     }
    return state;
}

// 5. 当组件中的事件 触发状态更改的时候
store.dispatch({type:"XXXXXX", payload:{}});