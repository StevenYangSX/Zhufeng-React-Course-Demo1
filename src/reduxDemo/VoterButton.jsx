import React from "react";
import { connect } from "react-redux";

import action from "../store/actions";
const VoterButton = (props) => {
  console.log("dispatch to props...", props);
  let { support, oppose } = props;

  const handleSupport = () => {
    let payload = { name: "steven", age: 19 };
    console.log("BUtton clicked....", payload);
    support(payload);
  };

  return (
    <div>
      <button onClick={handleSupport}>支持</button>
      <button onClick={oppose}>反对</button>
    </div>
  );
};

// 标准语法
// export default connect(
//   (state) => state.voter,
//   (dispatch) => {
//     return {
//       support() {
//         dispatch(action.voter.support());
//       },
//       oppose() {
//         dispatch(action.voter.oppose());
//       },
//     };
//   }
// )(VoterButton);

export default connect((state) => state.voter, action.voter)(VoterButton);
