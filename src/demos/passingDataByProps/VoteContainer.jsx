import React, { useCallback, useState } from "react";
import "./Vote.less";
import VoteInfo from "./VoteInfo";
import VoteButton from "./VoteButton";
const VoteContainer = () => {
  let [supNum, setSupNum] = useState(10);
  let [oppNum, setOppNum] = useState(0);

  // 使用 useCallback(()=>{},[]) 传递方法
  // 每次视图更新 不会再重新在内存中 创建一个同样的方法
  // 通常用于 使用 props 传递一个通用的方法
  const change = useCallback(
    (type) => {
      if (type === "sup") {
        setSupNum(supNum + 1);
        return;
      }
      setOppNum(oppNum + 1);
    },
    [supNum, oppNum]
  );

  return (
    <div className="vote-main-container">
      <div>
        <h2>React父子组件通信</h2>
        <span>{supNum + oppNum}</span>
      </div>
      <VoteInfo supNum={supNum} oppNum={oppNum} />
      <VoteButton change={change} />
    </div>
  );
};

export default VoteContainer;
