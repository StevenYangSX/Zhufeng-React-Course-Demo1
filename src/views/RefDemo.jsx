import React from "react";

class RefDemo extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title" ref="titleBox">
          温馨提示
        </h2>
      </div>
    );
  }

  componentDidMount() {
    // 第一次渲染完毕 virtualDOM变为真实DOM 可以获取真实的DOM元素
    console.log("use ref -->", this.refs.titleBox);
  }
}

export default RefDemo;
