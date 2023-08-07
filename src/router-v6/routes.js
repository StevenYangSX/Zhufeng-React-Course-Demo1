/* eslint-disable react/jsx-no-undef */
// react-router v6 路由表

import A from './views/A';
import {lazy} from 'react';
const routes = [
    {
        path:'/',
        component: () => <Navigate to="/a" />,
    },
    {
        path:"/a",
        component: A,
        meta: {},
        children:[]
    },
    {
        path:"/b",
        component: lazy(() => import("./views/B") ),  //懒加载
        meta: {},
        children:[]
    },
    {
        path:"/c",
        component: lazy(() => import("./views/C") ),  //懒加载
        meta: {},
        children:[]
    },
    {
        path:"/*",
        component: () => {
            return <Navigate to = {{  pathname: '/a',search: '?from=404' }} />
        }
    }
];

export default routes;