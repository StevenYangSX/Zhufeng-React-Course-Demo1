/**
 * 一个通用的Dialog提示框组件
 * 标题   内容  下方按钮都为动态可变
 *
 */
import PropTypes from "prop-types";
import React from "react";
const Dialog = function Dialog(props) {
  let { title, content, children } = props;
  children = React.Children.toArray(children);
  return (
    <div
      className="dialog-box"
      style={{ backgroundColor: "greenyellow", margin: "30px", width: 300 }}
    >
      <div
        className="header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 className="title">{title}</h2>
        <span>X</span>
      </div>
      <div className="main">{content}</div>
      {children.length > 0 ? <div className="footer">{children}</div> : null}
    </div>
  );
};

// props校验
Dialog.defaultProps = { title: "温馨提示" };

Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Dialog;
