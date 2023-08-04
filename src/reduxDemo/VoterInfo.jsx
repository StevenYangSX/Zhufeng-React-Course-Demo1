import React from "react";
import { connect } from "react-redux";

const VoterInfo = (props) => {
  let { supNum, oppNum } = props;
  return (
    <div>
      <div>支持人数:{supNum}</div>
      <div>反对人数:{oppNum}</div>
      <div>支持比率:{(supNum / (supNum + oppNum)).toFixed(2) * 100 + " %"}</div>
    </div>
  );
};

export default connect((state) => state.voter)(VoterInfo);
