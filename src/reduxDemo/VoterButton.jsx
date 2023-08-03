import React, { useContext } from "react";
import Context from "../context/Context";

const VoterButton = () => {
  const { store } = useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({
            type: "VOTE_SUP",
          });
        }}
      >
        支持
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "VOTE_OPP",
          });
        }}
      >
        反对
      </button>
    </div>
  );
};

export default VoterButton;
