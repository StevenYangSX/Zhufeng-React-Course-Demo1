import React, { memo } from "react";

const VoteButton = (props) => {
  console.log("按钮组件更新....");
  let { change } = props;
  return (
    <div>
      <button onClick={change.bind(null, "sup")}>支持</button>
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
