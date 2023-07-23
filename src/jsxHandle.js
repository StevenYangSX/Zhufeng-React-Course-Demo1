
// 手写  react.createElement 方法 
// Implement reat.createElement() method
//  简化版  Simplyfiled 

export function createElement(element, props,...children) {
    let virtualDOM = {
        $$typeof:Symbol('react.element'),
        key: null,
        ref:null,
        type:null,
        props:{},
    };

    virtualDOM.type = element;
   
    if(props !== null) {
        virtualDOM.props= {...props}
    }

    let len = children.length;

    if(len === 1 ) {
        virtualDOM.props.children = children[0];
    }

    if(len > 1) {
        virtualDOM.props.children = children;
    }

    return virtualDOM;
}




// 手写 render 方法
// implement render()  method
//  简化版  Simplyfiled
export function render(virtualDOM, container) {
    let {type, props} = virtualDOM
    if(typeof type === 'string') {
        // 存储的是标签名 : 动态创建标签
        let ele = document.createElement(type);
        // 将props中的属性 给到 此标签
        each(props, (value,key)=>{
            // 处理 className
            if(key === 'className') {
                ele.className = value;
                return;
            }
            // style 的处理  value 是 style的样式对象
            if(key === 'style') {
                each(value, (val,attr)=>{
                    ele.style[attr] = val;
                })
                return;
            }
            // 子节点的处理  value 存储的是children属性值
            if(key === 'children') {
                let children = value;
                if(Array.isArray(children)) {
                    children = [children];
                }
                // 对所有子节点进行处理
                children.forEach(child =>{
                    // 如果子节点 只是文字：直接插入
                    if(typeof child === 'string') {
                        ele.appendChild(  document.createTextNode(child));
                        return;
                    } 

                    // 如果子节点又是一个virtualDOM, 递归 render()
                    render(child,ele);
                })
                return;
            }
            // 正常情况下  给ele增加属性 key-value
           ele.setAttribute(key,value);
        })
        // 将新增的标签  增加到指定容器中
        container.appendChild(ele);
    }

}


// hleper function :  iterate through virtualDOM.props
//  不使用 for..in 性能问题：for..in会遍历 所有属性 私有的 共有的。 
//  思路：获取对象所有的私有属性 ：  Object.getOwnPropertyNames(arr) 
//   Object.getOwnPropertySymbols(arr) 
// let keys = Object.getOwnPropertyNames().concat(Object.getOwnPropertySymbols()); 
// let kyes = Reflect.ownKeys();
const each = function each (obj, callback) {
    if(obj === null || typeof obj !== 'object') return obj;
    if(typeof callback !== 'function') throw new TypeError('callback is not a function.');
    let keys = Reflect.ownKeys(obj);
    keys.forEach(key =>{
        let value = obj[key];
        callback(value,key);
    })
}