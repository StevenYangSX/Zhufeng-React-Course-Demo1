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
   1. 把我们编写的JSX，编译为**虚拟DOM对象** (**virtualDOM Object**) : React框架内部构建的对象体系, 根据这些属性，描述DOM节点的相关特征。 

      1. **基于 babel-preset-react-app**编译JSX  ------>   React .createElement(.....)

         ```javascript
         /*
         @param1: ele : 元素标签名称 或 组件
         @param2: parops：元素的属性集合。如果没有任何属性，则此值为null
         @param3: children: 从第三个及以后的参数，都是当前元素的子节点
         */ 
         React.createElement(ele,props,...children)
         ```

      1. 再把 createElement 方法执行，创建出virtualDOM虚拟DOM对象

         ```javascript
         virtualDOM = {
             $$typeof : Symbol(react.element),
             key: null,
             ref: null,
             type: "h2",  // 标签名称  组建名称
              //存储元素相关属性 和子节点信息  
             props: {
                // some props
                children:[]      //子节点信息
             }, 
             
         }
         ```
         
         
         
         

   2. 把构建的VirtualDOM渲染为**真实DOM**：浏览器页面中渲染出来的 被用户所见的DOM元素。

      1. 基于ReactDOM中的render方法处理！！

      2. V16  VS.  V18

         ```javascript
         // React V16
         ReactDOM.render(
         	<>...</>,
             document.getElementById('root')
         );
         
         
         //  React V18
         const root = ReactDOM.createRoot(document.getElementById('root'));
         root.render(
         	<>...</>
         )
         ```

   3. 补充：第一次渲染页面，是直接从VirtualDOM --->  真实DOM。但是后期视图更新的时候，经过**DOM-DIFF**对比，计算出补丁包PATCH，把PATCH进行渲染。


### 3.React函数组件  Functional Component

1. 函数组件（functional components）基本概念

   1. 命名：组件名称 采用 PascalCase (DemoOne) 大驼峰命名
   2. 渲染机制
      1. 基于bable-preset-react-app，把调用的组件转化为 createElement 格式
      2. 把createElement执行，创建出一个virtualDOM对象
      3. 基于 root.render() 方法， 把virtualDOM变为真实的DOM。如果virtualDOM.type 是一个方法 ，则会执行这个方法，把virtualDOM的props，作为实参传递给这个方法。
      4. 接收函数执行的返回结果：当前组件的virtualDOM对象。
      5. 最后基于render() ，把组件返回的虚拟DOM变为真实DOM。

2. 函数组件（functional components）props的处理 

   1. 调用组件，传递进来的属性是”**只读**“的 **READ-ONLY** : ```props.isFrozen() === true```

   2. Tip5s: 关于对象的规则设置（1.冻结 2. 密封 3. 不可扩展）（**解释为什么props为只读**）

      ```javascript
      let obj = {a:100,b:200,c:300};
      
      // 被冻结的对象 不能修改成员值 不能新增 删除，不能劫持  Object.defineProperty 
      obj.freeze();  //cannot modify, insejt, delete any property.
      
      // 对象密封  可以 修改成员值。 不能新增 删除，不能劫持  Object.defineProperty 
      obj.seal();
      
      // 对象不可扩展  可以 修改成员值  可以  删除。 可以劫持  Object.defineProperty  。不能新增，
      Object.preventExtensions(obj);
      ```

   3. 作用：父组件调用子组件的时候，传递信息给子组件。

   4. **对props做校验 和 默认值**

      ```javascript
      // props 校验
      DemoOne.defaultProps = {
        data: [1],
      };
      
      DemoOne.propTypes = {
        title: PropTypes.string.isRequired,
        data: PropTypes.array,
      };
      export default DemoOne;
      ```

3. React中的插槽机制  **类似与 vue的slot**
   1. 需求：封装一个 ```<DemoOne/>```组件，尽可能具备更强的复用性 
   2. 比如：需要有两个Button 控制显示/隐藏
   3. 可以 通过传一个prop实现，也可以**预留按钮区域，但是内容不写，调用的时候，把结构传递过去**

4. 一个练习：封装一个Dialog组件，上方显示title，中间显示提示内容，下面两个按钮：确定和取消 文字样式也不确定。

### 4. 类组件 Class Component

1. 类组件必须继承React.Component这个类

   1. 必须给当前类设置一个render方法，放在原型上。在render方法中，返回需要渲染的视图

   2. 基于extends的继承 ```React.Component.call(this)``` 

      ```javascript
      function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = enptyObject;
          this.updater = updater || ReactNodeUpdateQueue;
      }
      ```

      

   3. 再基于原型继承 ```Parent.prototype.__proto__ === React.Component.prototype``` 

   4. 如果自己设置了constructor, 则必须使用super

      ```javascript
      class Parent extneds React.Component {
          constuctor(n,m) {
              super();  // 等价于    React.Component.call(this);
              //......
          }
      ```

      

   5. **render函数渲染底层**

      1. 当 render() 方法接收的VirtualDOM Object中的type: class Vote 的时候，把这个class的构造函数基于new执行，也会把解析出来的props传递进去
      2. 每调用一次类组件，都会创建一个单独的实例。
      3. **初始化状态：state**  state的修改 ----->  视图更新
         1. state需要手动初始化 默认为null.
         2. 直接给state赋值并不会触发视图更新。要基于React.Component.prototype提供的方法操作：
            1. ```this.setState(partialState)```
            2. ```this.forceUPdate()``` 强制更新

      4. 触发生命周期函数 ：在程序运行至某个阶段，让开发者在这个阶段做一些自定义的事情　componentWillUnmount

2. 类组件的生命周期

   1. ```shouldComponentUpdate```
      1. 返回 true/false ，是否允许更新

   2. ```componentWillUpdate```
      1. 不安全的
      2. 在这个阶段  状态还没有被修改

   3. 触发render() ： 组件更新 按照最新的状态/属性 把返回的JSX编译为virtualDOM
   4. ```componentDidUPdate``` 组件更新完毕、


### 5.有关Ref操作的解读

1. 受控组件：基于修改数据、状态， 让视图更新，达到需要的效果

2. 非受控组件：基于ref，获取DOM元素，实现需求

3. ```javascript
   //基于ref获取DOM的语法
   //1.  this.refs.titleBox 获取ref
   <h2 className="title" ref="titleBox">
       温馨提示
   </h2>
   
   //2. ref是个方法
   <h2 className="title" ref={x=>this.box2 = x}>
       友情提示
   </h2>
   ```

### 6.有关Ref操作的解读

1. ```this.setState([partialState],[callback])```
   1. 支持部分状态修改
   2. **[callback]** : **在状态更改，视图更新完成后** 触发执行
      1. 发生在componentDidUpdate周期后，使用这个回调，可以在指定某个状态修改后处理一些逻辑
      2. 即使我们基于```shouldComponentUpdate```阻止了状态/视图的更新，这个callback还是一定会执行！
2. 在React18中，setState在任何地方执行，都是 **异步** 操作！
   1. React 18 有一套更新队列的机制
   2. 基于异步，实现状态的批处理
   3. 减少视图更新的次数，降低渲染消耗的性能!
   4. 让更新的逻辑和流程更清晰稳健

3. ```flushSync()```方法
   1. 来自 ```react-dom```, 刷新updater, 触发状态和视图更新
4. ```setState((prevState)=>{})``` 传递一个方法到 setState

### 7.React中的合成事件  Synthetic Event

1. Class component 中 事件绑定一个 "普通方法"， 会丢失 this。 需要bind

   ```this.someEventHandler.bind(this)```

2. 使用 ES6 Arrow Function

   ```<Button onClick={()=>{......}}>Click</Button>```

3. JS中事件绑定的一个基础知识： ```addEventLisener(para1,function,true/false)```

   1. **事件传播机制** : 从最外层 --> 最内层 逐一查找 （捕获阶段）最内层 ---> 最外层 （冒泡阶段） 


4. 事件委托

   ```javascript
   const body = document.body;
   body.addEventListener("click",function(ev){
       // ev.target  事件源  点的是谁  谁就是事件源
       let target = ev.target;
       if(target.id === 'root') {
           //do something
           return;
       }
        if(target.id === 'inner') {
           //do something
           return;
       }
        if(target.id === 'outer') {
           //do something
           return;
       }
       // do something if id is not root, inner ,outer
   })
   ```

### 8. Hook 组件 （重点！！！！Functional Component With State）

1. **核心重点：函数组件！ 每次视图渲染、更新，都需要执行这个函数！**
2. **```UseEffect(()=>{})```**  ---->  生命周期函数  在函数组件中的应用
   1. ```useEffect()```会在第一次渲染完毕以后，执行callback。 等价于 ``` componentDidMound```
   2. ```useEffect()``` 在组件每一次更新完成后，会执行callback。等价于 ```componentDidUpdate``` 
3. ```useEffect(()=>{},[])``` 如果这里传入一个空数组
   1. 会在第一次渲染完毕后执行！！
   2. 每一次视图更新后，callback不会再执行 等价于  ```componentDidMount``` 
4. ```useEffect(()=>{},[dep1,dep2,....])``` 如果依赖数组传了值
   1. 会在第一次渲染完毕后执行！
   2. 当依赖的状态发生改变的时候，也会执行callback
5. ```useLayoutEffect(()=>{})```的应用
6. ```useRef()```
7. ```useMemo()```构建计算缓存
8. ```useCallback```缓存函数应用
9. 自定义hook

### 9. React 父子组件信息传递

1. 通过props
2. 通过context
