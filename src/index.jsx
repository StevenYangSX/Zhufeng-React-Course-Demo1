import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import DemoOne from "./views/DemoOne";
import Dialog from "./components/Dialog";
import Vote from "./views/Vote";
import VoteClass from "./views/VoteClass";
import RefDemo from "./views/RefDemo";
import SetState from "./views/SetState";

const root = ReactDOM.createRoot(document.getElementById("root"));

const text = "一些数据";
root.render(
  <Fragment>
    <h4 style={{ color: "red", fontSize: 22 }}>{text}</h4>
    {new Array(5).fill(0).map((ele, index) => {
      return <button key={index}>按钮{index}</button>;
    })}

    <br />
    <br />
    <DemoOne title="Title 1" data={[1, 2, 3, 4]}>
      <span slot="footer">页脚</span>
      <span>hahahhahahah</span>
      <span slot="header">页眉</span>
    </DemoOne>

    <DemoOne title="Title 2" data={[1, 2, 3, 4]}>
      <span slot="header">只有页眉</span>
      <span>hahahhahahah</span>
    </DemoOne>

    <DemoOne title="title 3">
      <span>hahahhahahah</span>
    </DemoOne>
    <br />
    <br />
    <br />
    <h2 style={{ backgroundColor: "yellowgreen" }}>A Dialog Component</h2>

    <Dialog content="我是内容是内容我是内容是内容我是内容是内容"></Dialog>
    <Dialog title="友情提示" content="In 1758, the Swedish botanist and zoologist">
      <button>确定</button>
      <button>取消</button>
    </Dialog>
    <br />
    <br />
    <br />
    <Vote title="React Vs. Vue Functional Component" />
    <br />
    <br />
    <VoteClass title="React Class Component" />
    <br />
    <br />
    <br />

    {/* 学习 ref 组件 */}
    <RefDemo />

    <br />
    <h3>More Details About setState</h3>
    <SetState />
  </Fragment>
);

//* 代理服务测试

// fetch("/jian/subscriptions/recommended_collections")
//   .then((res) => res.json())
//   .then((value) => {
//     console.log("value..", value);
//   });
