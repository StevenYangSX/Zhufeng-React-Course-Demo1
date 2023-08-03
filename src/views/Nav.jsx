import React from "react";
import "./Nav.less";
const Nav = () => {
  return (
    <nav className="box">
      <h2 className="title">购物商城</h2>
      <div className="list">
        <a href="">首页</a>
        <a href="">秒杀</a>
        <a href="">我的</a>
      </div>
    </nav>
  );
};

export default Nav;
