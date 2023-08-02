import React, { useState } from "react";
import "./VoteContext.less";
import VoteContextInfo from "./VoteContextInfo";
import VoteContextButton from "./VoteContextButton";
import Context from "../../context/Context";

const VoteContextContainer = () => {
  let [supNum, setSupNum] = useState(10);
  let [oppNum, setOppNum] = useState(0);

  /**
   * 根据不同操作 更新人数
   * @param {string} type
   * @returns
   */
  const change = (type) => {
    if (type === "sup") {
      setSupNum(supNum + 1);
      return;
    }
    setOppNum(oppNum + 1);
  };

  return (
    <Context.Provider
      value={{
        supNum,
        oppNum,
        change,
      }}
    >
      <div className="vote-context-main-container">
        <div>
          <h2>React父子组件通信</h2>
          <span>{supNum + oppNum}</span>
        </div>
        <VoteContextInfo />
        <VoteContextButton />
      </div>
    </Context.Provider>
  );
};

export default VoteContextContainer;
