# 珠峰----React Course

### 1. 一些前置理论知识和配置

1. Create-react-app 创建的react APP, 默认会安装
   1. react: react核心
   2. react-dom: 渲染web（HTML）
   3. react-scripts: 

2. 更改默认的sass 为 less（修改webpack的一些配置）

   1. webpack.config.js 修改
   2. start.js 可以修改 npm start的命令：如端口号 HOST
   3. 如果想基于修改环境变量的方式来改
   4. yarn add cross-env
   5. ```"start": "cross-env PORT=8080 node scripts/start.js",```

3. 代理配置（跨域问题）

   1. 在src中，建立setupProxy.js

   2. 安装   http-proxy-middleware

   3. 配置代理代码

      ```javascript
      const { createProxyMiddleware } = require("http-proxy-middleware");
      module.exports = function (app) {
        app.use(
          createProxyMiddleware("/jian", {
            target: "https://www.jianshu.com/asimov",
            changeOrigin: true,
            ws: true,
            pathRewrite: { "^/jian": "" },
          })
        );
        app.use(
          createProxyMiddleware("/jian", {
            target: "https://news-at.zhihu.com/api/4",
            changeOrigin: true,
            ws: true,
            pathRewrite: { "^/zhi": "" },
          })
        );
      };
      ```

4. React数据驱动，MVC体系（Vue MVVM体系）
   1. Model-View-Controller   数据层-视图层-控制层   React :  数据改变 ----> 页面刷新  （数据单向绑定，**手动实现** 视图变化->数据变化）
   2. Model-View-ViewModel  数据层-视图层-数据/视图监听层  Vue: 数据改变----> 页面刷新  页面内容改变----->数据改变  （**双向绑定**）

### 2. JSX构建视图的基础知识  Javascript & HTML

1. ```<Fregment></Fregment>```的作用：React提供了 Fregment 标签，用来作为根标签，**且不会占用一个层级（div占用一个层级）**
2. JSX中{}语法中 嵌入不同的值，所呈现的特点
   1. number/string：值是什么 就渲染什么
   2. boolean/null/undefined/Symbol/BigInt:渲染内容为空
   3. 普通对象：  ``` const a = {x:10,y:"test"};``` 报错
   4. 数组对象：把数组中 每一个元素分辨渲染
   5. 方法对象：```const a = function(){}```不止 报错 不支持渲染。 需要用 ```<A/>```来渲染。
3. 给元素设置样式
   1. 行内样式（in-line CSS）：要基于对象的模式处理  ```  <h4 style={{ color: "red", fontSize: 22 }}>{text}</h4>```
   2. 通过类名设置：```className="correct"```而不是```class="some-css-class"``` 
4. JSX底层渲染机制**「创建virtualDOM」**
   1. 把我们编写的JSX，编译为**虚拟DOM对象** (**virtualDOM Object**) : React框架内部构建的对象体系

