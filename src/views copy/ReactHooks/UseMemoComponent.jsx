import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  console.log("============== Use Memo ===================");

  let [supNum, setSupNum] = useState(10),
    [oppNum, setOppNum] = useState(5),
    [x, setX] = useState(0);

  const handleSup = () => {
    setSupNum(supNum + 1);
  };
  const handleOpp = () => {
    setOppNum(oppNum + 1);
  };
  const handleElse = () => {
    setX(x + 1);
    console.log("did something else....");
  };

  //   let total = supNum + oppNum,
  //     ratio = "--";

  //   if (total > 0) {
  //     console.log("计算中.......");
  //     ratio = ((supNum / total) * 100).toFixed(2) + "%";
  //   }

  let ratio = useMemo(() => {
    console.log("计算中.....");
    let total = supNum + oppNum;
    if (total > 0) return ((supNum / total) * 100).toFixed(2) + "%";
  }, [supNum, oppNum]);

  return (
    <div>
      <div>
        <p>支持人数: {supNum}人</p>
        <p>反对人数: {oppNum}人</p>
        <p>支持比率: {ratio}</p>
      </div>
      <div>
        <button onClick={handleSup}>支持</button>
        <button onClick={handleOpp}>反对</button>
        <button onClick={handleElse}>别的事儿</button>
      </div>
    </div>
  );
};

export default UseMemoComponent;
