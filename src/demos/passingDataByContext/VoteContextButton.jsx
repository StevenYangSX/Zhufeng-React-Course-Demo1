import React, { memo, useContext } from "react";
import Context from "../../context/Context";

const VoteButton = () => {
  let { change } = useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          change("sup");
        }}
      >
        支持
      </button>
      <button
        onClick={() => {
          change("opp");
        }}
      >
        反对
      </button>
    </div>
  );
};

export default memo(VoteButton);
