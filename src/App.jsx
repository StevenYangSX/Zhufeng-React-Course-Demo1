import React from "react";
import Nav from "./views/Nav";
import Menu from "./views/Menu";
import HighOrderComponent from "./highOrderComponent/HighOrderComponent";
import VoterRedux from "./reduxDemo/VoterRedux";

const App = () => {
  return (
    <div className="home-box">
      <Nav />
      <Menu />
      <div className="box">一些内容</div>

      <div>==========High Order Component 高阶组件 ============</div>
      <HighOrderComponent x={10} y={20} enable={true} />
      <br />
      <br />
      <br />
      <div>======Redux Demo==========</div>
      <VoterRedux />
    </div>
  );
};

export default App;
