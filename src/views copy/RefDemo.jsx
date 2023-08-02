/*
  基本的ref的用法
 */

import React from "react";
class RefDemo extends React.Component {
  box3 = React.createRef();

  render() {
    return (
      <div>
        <h2 className="title" ref="titleBox">
          温馨提示
        </h2>
        <h2 className="title" ref={(x) => (this.box2 = x)}>
          友情提示
        </h2>
        <h2 className="title" ref={this.box3}>
          哈哈提示
        </h2>
      </div>
    );
  }

  componentDidMount() {
    // 第一次渲染完毕 virtualDOM变为真实DOM 可以获取真实的DOM元素
    console.log("use ref -->", this.refs.titleBox);
    console.log("get ref by funtion ->", this.box2);
    console.log("box3---->", this.box3);
  }
}

export default RefDemo;

/*
基于ref获取DOM的语法
1.  this.refs.titleBox 获取ref
  <h2 className="title" ref="titleBox">
    温馨提示
  </h2>

2. ref是个方法
 <h2 className="title" ref={x=>this.box2 = x}>
    友情提示
  </h2>

*/
