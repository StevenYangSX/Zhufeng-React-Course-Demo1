import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
  </div>
);

//* 代理服务测试

// fetch("/jian/subscriptions/recommended_collections")
//   .then((res) => res.json())
//   .then((value) => {
//     console.log("value..", value);
//   });
