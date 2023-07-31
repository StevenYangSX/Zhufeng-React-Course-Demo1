import React, { useCallback, useState } from "react";

let prev;
let prev2;

const UseCallbackComponent = () => {
  console.log("============= UseCallback Hook =============");

  let [x, setX] = useState(0);

  const handler = () => {
    console.log("handler called.....");
  };

  const handler2 = useCallback(() => {
    //.......
  }, []);

  if (!prev) {
    prev = handler;
    prev2 = handler2;
  } else {
    console.log("check if new handler === prev ====>", prev === handler);
    console.log("check if new handler2 === prev2 ====>", prev2 === handler2);
  }
  return (
    <div>
      <div>
        <p>{x}</p>
      </div>
      <div>
        <button onClick={() => setX(x + 1)}>累加</button>
      </div>
    </div>
  );
};

export default UseCallbackComponent;
