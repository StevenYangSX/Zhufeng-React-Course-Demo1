import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import App from "./App";
import store from "./store/store";
import Context from "./context/Context";
console.log("store===>", store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </div>
);

//* 代理服务测试
// fetch("/jian/subscriptions/recommended_collections")
//   .then((res) => res.json())
//   .then((value) => {
//     console.log("value..", value);
//   });
