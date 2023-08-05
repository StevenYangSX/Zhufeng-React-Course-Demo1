import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTaskListAsync,
  voteSup,
  getAllTaskList,
} from "../storeWithReduxToolkit/features/voterSlice";

const VoterButton = (props) => {
  // let { support, oppose } = props;
  let { oppNum, supNum, taskList } = useSelector((state) => state.voter);
  let dispatch = useDispatch();

  const handleSupport = () => {
    let payload = { name: "steven", age: 19 };
    console.log("BUtton clicked....", voteSup());
    dispatch(voteSup(payload));
  };

  useEffect(() => {
    dispatch(getAllTaskListAsync());
  }, []);
  return (
    <div>
      <button onClick={handleSupport}>支持</button>
      <button onClick={handleSupport}>反对</button>
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

// export default connect((state) => state.voter, action.voter)(VoterButton);
export default VoterButton;
