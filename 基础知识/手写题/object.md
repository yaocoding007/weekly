## new

```js
function New(func, args) {
    let obj = {};
    if(func.prototype !== null) {
        obj.__proto__ = func.prototype;
    }
    let res = func.apply(obj, args);
    if(res !== null && ['object', 'function'].includes(res)) {
        return res;
    }
    return obj;
}
```



## Object.create

```js
function create(o) {
  function T() {};
  T.prototype = o;
  return new T();
}
```

## instanceof

```js
function Instanceof(left, right) {
    let leftProto = left.__proto__,
        rightProto = right.prototype;
    
    while(true) {
        if(leftProto === null) {
            return false;
        }   
        if(leftProto === rightProto) {
            return true;
        }   
        leftProto = leftProto.__proto__;
    }
}
```



## deepClone
https://segmentfault.com/a/1190000020255831

```js

function deepClone(data, map = new WeekMap()) {
  	if(typeof data !== 'object') {
          return data
    }
    let cloneTarget = Array.isArray(data) ? [] : {}
    if(map.get(data)) {
        return map.get(data);
    }
    map.set(data, cloneTarget);
    for(key in data) {
        cloneTarget[key] = deepClone(data[key], map)
    }
    return cloneTarget;
}

补充知识：
Object.keys() 仅仅返回自身的可枚举属性，不包括继承来的，更不包括Symbol属性
Object.getOwnPropertyNames() 返回自身的可枚举和不可枚举属性。但是不包括Symbol属性
Object.getOwnPropertySymbols() 返回自身的Symol属性
for...in 可以遍历对象的自身的和继承的可枚举属性，不包含Symbol属性
Reflect.ownkeys() 返回对象自身的所有属性，不管是否可枚举，也不管是否是Symbol。注意不包括继承的属性
```

## JSON.stringify

```js

if (!window.JSON) {
    window.JSON = {
        parse: function(jsonStr) {
            return eval('(' + jsonStr + ')');
        },
        stringify: function(jsonObj) {
            var result = '',
                curVal;
            if (jsonObj === null) {
                return String(jsonObj);
            }
            switch (typeof jsonObj) {
                case 'number':
                case 'boolean':
                    return String(jsonObj);
                case 'string':
                    return '"' + jsonObj + '"';
                case 'undefined':
                case 'function':
                    return undefined;
            }

            switch (Object.prototype.toString.call(jsonObj)) {
                case '[object Array]':
                    result += '[';
                    for (var i = 0, len = jsonObj.length; i < len; i++) {
                        curVal = JSON.stringify(jsonObj[i]);
                        result += (curVal === undefined ? null : curVal) + ",";
                    }
                    if (result !== '[') {
                        result = result.slice(0, -1);
                    }
                    result += ']';
                    return result;
                case '[object Date]':
                    return '"' + (jsonObj.toJSON ? jsonObj.toJSON() : jsonObj.toString()) + '"';
                case '[object RegExp]':
                    return "{}";
                case '[object Object]':
                    result += '{';
                    for (i in jsonObj) {
                        if (jsonObj.hasOwnProperty(i)) {
                            curVal = JSON.stringify(jsonObj[i]);
                            if (curVal !== undefined) {
                                result += '"' + i + '":' + curVal + ',';
                            }
                        }
                    }
                    if (result !== '{') {
                        result = result.slice(0, -1);
                    }
                    result += '}';
                    return result;

                case '[object String]':
                    return '"' + jsonObj.toString() + '"';
                case '[object Number]':
                case '[object Boolean]':
                    return jsonObj.toString();
            }
        }
    };
}

/**
 * 参考 https://www.jianshu.com/p/f1c8bcd16f71
 */
```



## JSON.parse

```js
function parse(string) {
	return eval('('+string+')')
}
```

