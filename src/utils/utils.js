export default function deepClone(obj, hash = new WeakMap()) {
    // Handle non-object types and null
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // Handle circular references
    if (hash.has(obj)) {
      return hash.get(obj);
    }
  
    let cloneObj = Array.isArray(obj) ? [] : {};
  
    hash.set(obj, cloneObj);
  
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloneObj[key] = deepClone(obj[key], hash);
      }
    }
  
    return cloneObj;
  }