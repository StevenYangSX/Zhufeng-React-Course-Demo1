import React, { Component } from "react";

export default class ReactEvent extends Component {
  // This Method is =>  ReactEvent.prototype.handle = function handle(){}
  // 基于React 内部的处理， 如果我们给合成事件绑定一个普通函数
  // 当事件行为触发 绑定的函数执行，方法中的this会是 undefined
  handleWithoutBind() {
    //  this is undefined !!!!!!
    console.log("通过handle获取点击事件");
    console.log("在handle中获取this -->", this);
  }

  handleWithBind(x, y) {
    console.log("this-->", this);
    console.log("x-->", x);
    console.log("y-->", y);
  }

  handleWithArrorFunction = (ev) => {
    console.log("handle With ES6 Arrow Function");
    console.log("this.....", this);
    console.log("event.....", ev);
  };

  handleWithArrorFunctionWithParameters = (x, y, ev) => {
    console.log("xxxxxx", x);
    console.log("yyyyyy", y);
    console.log("eventevent", ev);
  };

  render() {
    return (
      <div>
        <h3>React Synthetic Event 合成事件</h3>
        <button onClick={this.handleWithoutBind}>不使用Bind</button>
        <button onClick={this.handleWithBind.bind(this, 10, 20)}>使用Bind</button>
        <button onClick={this.handleWithArrorFunction}>使用ArrowFunction</button>
        <button onClick={this.handleWithArrorFunctionWithParameters.bind(null, 10, 20)}>
          使用ArrowFunction传参
        </button>
      </div>
    );
  }
}
