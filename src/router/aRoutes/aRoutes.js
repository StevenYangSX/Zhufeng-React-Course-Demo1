import A1 from "../../pages/react-router-dom-v5/a/A1";
import A2 from "../../pages/react-router-dom-v5/a/A2";
import A3 from "../../pages/react-router-dom-v5/a/A3";
const aRoutes = [
  {
    redirect: true,
    from: "/a",
    to: "/a/a1",
    exact: true,
  },
  {
    path: "/a/a1",
    component: A1,
    name: "A1",
    meta: {},
    children: [],
  },
  {
    path: "/a/a2",
    component: A2,
    name: "A2",
    meta: {},
    children: [],
  },
  {
    path: "/a/a3",
    component: A3,
    name: "A3",
    meta: {},
    children: [],
  },
];

export default aRoutes;
