/*
React 高阶组件 ： 利用JS中的闭包   柯理化函数    实现的组件代理
*/

import React from "react";

const HighOrderComponent = (props) => {
  return <div>HighOrderComponent</div>;
};

// 执行这个方法 传递一个组件进来 Component
const ProxyTest = function ProxyTest(Component) {
  // Component  ---> HighOrderComponent
  return function HOC(props) {
    return <Component {...props} />;
  };
};

// 把函数执行的返回结果   （一个组件）
// 基于ES6 Module 规范到处  供APP导入使用
export default ProxyTest(HighOrderComponent);
