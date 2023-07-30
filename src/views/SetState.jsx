/*
Details about setState
*/

import React, { Component } from "react";

// flushSync 可以刷新updater 让里面的任务 立即渲染一次
import { flushSync } from "react-dom";
export default class SetState extends Component {
  state = {
    x: 10,
    y: 5,
    z: 0,
  };

  clickHandler = () => {
    // this ---->  实例 ！
    let { x, y, z } = this.state;

    // this.setState(
    //   {
    //     x: x + 1,
    //   },
    //   () => {
    //     console.log("状态x修改完毕，视图更新完毕");
    //   }
    // );

    // 同时修改3个状态值 只会出发一次 视图更新
    // this.setState({
    //   x: x + 1,
    //   y: y + 1,
    //   z: z + 1,
    // });

    //  setState 是异步的！！！！ 3次调用  也只触发一次视图更新！！！
    this.setState({
      x: x + 1,
    });
    this.setState({
      y: y + 1,
    });

    //! 新需求：z的值 应该为  最新更新后的 x + y
    //? 因为setState的异步特性， 这时候 z = 10 + 5;  而不是  应该的  z = 11 + 6
    //* 所以 需要 react-dom中的一个方法：flushSync()：刷新updater 让里面的任务 立即渲染一次

    flushSync();

    this.setState({
      z: this.state.x + this.state.y,
    });

    /**
     * 传递 一个方法 到 setState((prevState)=>{})
     */
    for (let index = 0; index < 20; index++) {
      this.setState((prevState) => {
        return {
          x: prevState.x + 1,
        };
      });
    }
  };

  componentDidUpdate() {
    console.log("componentDidUpdate -> 更新完毕！");
  }

  render() {
    console.log("视图渲染render();");
    let { x, y, z } = this.state;
    return (
      <div>
        x:{x}
        <br />
        y:{y}
        <br />
        z:{z}
        <br />
        <button onClick={this.clickHandler}>按钮</button>
      </div>
    );
  }
}
