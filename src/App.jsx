import React from "react";
import Nav from "./views/Nav";
import Menu from "./views/Menu";
import HighOrderComponent from "./highOrderComponent/HighOrderComponent";
import VoterRedux from "./reduxDemo/VoterRedux";
import styled from "styled-components";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import A from "./pages/react-router-dom-v5/A";
import B from "./pages/react-router-dom-v5/B";
import C from "./pages/react-router-dom-v5/C";
import Page404 from "./pages/react-router-dom-v5/Page404";
import RouterView from "./router";
import routes from "./router/routes";
import NavHeader from "./components/NavHeader";
// 使用 styled-components 建立导航的样式
const NavBox = styled.nav`
  a {
    margin-right: 20px;
    color: black;
    background-color: blueviolet;
  }
`;

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
      <br />
      <br />
      <br />
      <div>===============React Router Version 5================</div>

      {/* 基于<HashRouter></HashRouter> 把所有要渲染的内容包起来  */}

      <HashRouter>
        <NavBox>
          <NavHeader />
        </NavBox>
        {/* 路由容器 */}
        <div className="content">
          <RouterView routes={routes} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
