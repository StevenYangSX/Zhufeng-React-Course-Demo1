import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  // useState
  // useEffect

  let [num, setNum] = useState(0);
  let [x, setX] = useState(100);

  // 1. useEffect 在函数组件中  使用生命周期函数

  useEffect(() => {
    console.log("useEffect OK....");
    console.log("check num in useEffect @1 -->", num);
  });

  // 2. 只有第一次渲染完毕后 执行callback. 每次视图更新 callback不再执行
  //  ====== componentDidMount
  useEffect(() => {
    console.log("useEffect with [] OK....");
    console.log("check num in useEffect @2 -->", num);
  }, []);

  // 3.
  // 当依赖数组传入值后  [num,x,......etc]
  // 第一次渲染完毕后 执行callback
  // 当依赖的状态值 （任何一个依赖的状态值）发生改变时，也会触发callback

  useEffect(() => {
    console.log("useEffect with [x] OK....");
    console.log("check num in useEffect @3 -->", num);
  }, [num]);

  // 4. 如果callback返回另一个方法
  // 会在组件释放的时候执行   （销毁组件之前）
  //?  类似于 beforeDestroy ????
  useEffect(() => {
    return () => {
      console.log("return a function in useEffect @4....", num);
    };
  });

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <span>{num}</span>
      <button onClick={handle}>新增</button>
    </div>
  );
};

export default UseEffectComponent;
