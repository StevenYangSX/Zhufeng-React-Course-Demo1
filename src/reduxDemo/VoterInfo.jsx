import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
const VoterInfo = () => {
  const { store } = useContext(Context);

  // 获取store中的公共状态
  let { supNum, oppNum } = store.getState();

  // 组件第一次渲染完成后  把让组件更新的方法 放在STORE的事件池中
  let [num2, setNum2] = useState(0);
  const update2 = () => {
    setNum2(num2 + 1);
  };

  useEffect(() => {
    let unsubscribe = store.subscribe(update2);
  }, []);

  return (
    <div>
      <div>支持人数:{supNum}</div>
      <div>反对人数:{oppNum}</div>
      <div>支持比率:{(supNum / (supNum + oppNum)).toFixed(2) * 100 + " %"}</div>
    </div>
  );
};

export default VoterInfo;
