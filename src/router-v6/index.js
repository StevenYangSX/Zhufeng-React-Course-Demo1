/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// react-router v6 路由

import routes from "./routes";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Suspense } from "react";
// 统一渲染的组件   在这里处理一些逻辑：权限 登录校验 传递属性 等....
const Element = function Element(props) {
  let { component: Component } = props;

  // 把路由信息获取到 最后基于属性 传递给组件
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [usp] = useSearchParams();
  //最后把Component进行渲染
  return <Component navigate={navigate} location={location} params={params} usp={usp} />;
};

// 递归 创建 Route
const createRoute = function createRoute(routes) {
  return (
    <>
      {routes.map((item, index) => {
        let { path, children } = item;
        // 每次路由匹配成功 不直接渲染我们设定的组件 而是渲染Element组件 处理好后 再渲染真实组件
        return (
          <Route key={index} path={path} element={<Element {...item} />}>
            {Array.isArray(children) ? createRoute(children) : null}
          </Route>
        );
      })}
    </>
  );
};

export default function RouterView() {
  return (
    <Suspense fallback={<>正在处理中......</>}>
      <Routes>{createRoute(routes)}</Routes>;
    </Suspense>
  );
}

export const withRouter = function withRouter(Component) {
  return function HOC(props) {
    let history = useHistory();
    let location = useLocation();
    let match = useRouteMatch();
    return <Component {...props} history={history} location={location} match={match} />;
  };
};
