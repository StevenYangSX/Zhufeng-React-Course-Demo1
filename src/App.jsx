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
          <Link to="/a">A页面</Link>
          <Link to="/b">B页面</Link>
          <Link to="/c">C页面</Link>
        </NavBox>
        {/* 路由容器 */}
        <div className="content">
          {/*
          SWitch 确保路由中，只要有一项匹配，就不再继续向下匹配 
          exact 设置匹配模式为精准匹配
          */}
          <Switch>
            <Redirect exact from="/" to="/a" />
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route
              path="/c"
              render={() => {
                // 当路由地址匹配后，先把render方法执行。返回值为需要渲染的内容
                // 在这个方法中 处理一些事情 如 登录校验等
                let isLogin = true;
                if (isLogin) {
                  return <C />;
                }
                return <Redirect to="/login" />;
              }}
            />
            {/* 匹配不到任何 显示自定义 404页面 */}
            <Route path="*" component={Page404} />
            {/* 匹配不到任何 自动跳转至首页 */}
            <Redirect to="/a" />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
