import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../context/Context";
const VoteInfo = () => {
  let { supNum, oppNum } = useContext(Context);
  // 使用  useMemo 如果还有其他属性传递过来 并不是 supNum oppNum
  // 则无需进行计算   优化！

  let ratio = "--";
  let total = supNum + oppNum;
  if (total > 0) {
    ratio = ((supNum / total) * 100).toFixed(2) + "%";
  }

  return (
    <div>
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
      <p>支持比率：{ratio}</p>
    </div>
  );
};

/**
 * 属性规则校验
 */
VoteInfo.defaultProps = {
  supNum: 0,
  oppNum: 0,
};

VoteInfo.propTypes = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number,
};

export default VoteInfo;
