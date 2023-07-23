// functional component example
import PropTypes from "prop-types";
import React from "react";

const DemoOne = function DemoOne(props) {
  let { title, data, children } = props;

  // 根基 children的不同 放置的位置不同
  // 可以基于 React.children对象提供的方法 对props.children做处理
  children = React.Children.toArray(children);

  let headerSlot = children.filter((child) => {
    console.log("check child--->", child);
    return child.props.slot === "header";
  });

  let footerSlot = children.filter((child) => {
    return child.props.slot === "footer";
  });

  let defaultSlot = children.filter((child) => {
    return child.props.slot !== "footer" && child.props.slot !== "header";
  });

  return (
    <div className="demo-box" style={{ backgroundColor: "green", margin: "10px" }}>
      <br />
      <h1>{headerSlot}</h1>
      <h3>{title}</h3>
      <span>{defaultSlot}</span>
      <h1>{footerSlot}</h1>
      <br />
    </div>
  );
};

// props 校验
DemoOne.defaultProps = {
  data: [1],
};

DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};
export default DemoOne;
