/**
 * 配置路由表：一个数组。 每一项 就是每一个需要配置的路由规则
 *      + redirectr:true 此配置是重定向配置
 *      + from: 来源的地址
 *      + to: 重定向的地址
 *      + eaxct: 是否精准匹配
 *      + path: 匹配的路径
 *      + component: 渲染的组件
 *      + name: 路由名称（命名路由）
 *      + meta:{} 路由元信息
 *      + children:[] 子路由
 */

import A from "../pages/react-router-dom-v5/A";
import B from "../pages/react-router-dom-v5/B";
import C from "../pages/react-router-dom-v5/C";

const routes = [
  {
    redirect: true,
    from: "/",
    to: "/a",
    exact: true,
  },
  {
    path: "/a",
    component: A,
    name: "A",
    meta: {},
    children: [],
  },
  {
    path: "/b",
    component: B,
    name: "B",
    meta: {},
  },
  {
    path: "/c",
    component: C,
    name: "C",
    meta: {},
  },
  {
    redirect: true,
    to: "/a",
  },
];

export default routes;
