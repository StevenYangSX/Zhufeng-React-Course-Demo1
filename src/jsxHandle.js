
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