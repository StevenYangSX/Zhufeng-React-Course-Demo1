import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  console.log("=========== UseRef ==========");

  let [num, setNum] = useState(0);

  const handler = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    // 获取ref
    console.log("get ref....", box.current);
  });

  let box = useRef(null);
  console.log("box....", box);
  return (
    <div>
      <span ref={box}>数量：{num}</span>
      <button onClick={handler}>增加</button>
    </div>
  );
};

export default UseRefComponent;
