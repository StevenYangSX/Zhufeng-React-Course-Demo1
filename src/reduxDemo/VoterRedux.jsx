import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import VoterInfo from "./VoterInfo";
import VoterButton from "./VoterButton";
const VoterRedux = () => {
  const { store } = useContext(Context);

  // 获取store中的公共状态
  let { supNum, oppNum } = store.getState();

  // 组件第一次渲染完成后  把让组件更新的方法 放在STORE的事件池中
  let [num, setNum] = useState(0);
  const update = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    let unsubscribe = store.subscribe(update);
    // return () => {
    //   unsubscribe();
    // };
  }, [supNum, oppNum]);

  return (
    <div>
      <div className="header">
        <h2>React投票组件--Redux 1</h2>
        <span>总人数:{supNum + oppNum}</span>
      </div>
      <VoterInfo />
      <VoterButton />
    </div>
  );
};

export default VoterRedux;
