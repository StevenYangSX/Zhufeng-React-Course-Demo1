import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class NavHeader extends Component {
  render() {
    console.log("check hoc NavHeader props......", this.props);
    return (
      <div>
        <Link to="/a">A页面</Link>
        <Link to="/b">B页面</Link>
        <Link to="/c">C页面</Link>
      </div>
    );
  }
}

// 这段代码就是利用一个高阶组件 让class 组件能够获取看 路由信息的方式
// withRouter原理
/*
const HandleNavHeader = function HandleNavHeader(Component) {
  return function HOC(props) {
    let history = useHistory();
    let location = useLocation();
    let match = useRouteMatch();
    return <Component {...props} history={history} location={location} match={match} />;
  };
};
 */

export default withRouter(NavHeader);
