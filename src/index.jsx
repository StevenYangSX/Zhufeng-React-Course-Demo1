import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";

import { createElement } from "./jsxHandle";

const root = ReactDOM.createRoot(document.getElementById("root"));

const text = "一些数据";
root.render(
  <Fragment>
    <h4 style={{ color: "red", fontSize: 22 }}>{text}</h4>
    {new Array(5).fill(0).map((ele, index) => {
      return <button key={index}>按钮{index}</button>;
    })}
  </Fragment>
);

// * 代理服务测试

fetch("/jian/subscriptions/recommended_collections")
  .then((res) => res.json())
  .then((value) => {
    console.log("value..", value);
  });
