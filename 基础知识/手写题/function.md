## call

```js
Function.prototype.call = function(context = window, ...args) {
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
}

Function.prototype._call = function(context) {
    var len = arguments.length;
    context = context ? Object(context) : window;
    var args = [];
    for(var i = 1; i < len; i++) {
        args.push("arguments[" + i + "]");
    }
    context.fn = this;
    eval("context.fn("+ args +")");
    delete context.fn;
}

```



## apply

```js
Function.prototype.apply = function(context = window, args) {
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
}
```



## bind

```js
Function.prototype.bind = function(context = window, ...args) {
    const fn = this;
    function Temp() {};
    function inner(...innerArgs) {
        const _context = this instanceof fn ? this : context
        that.apply(_context, args.concat(innerArgs))
    }
    Temp.prototype = fn.prototype;
    inner.prototype = new Temp();
    return inner;
}
```



## debounce

```js
function debounce(fn, delay) {
    let timer = null;
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, [...arguments])
        }, delay)
    }
}
```



## throllte

```js
function throttle(fn, delay) {
    let flag = true;
    return function(...args) {
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay)
    }
}
```

## curry

```js
function curry1(fn, ...args) {
    var that = this;
    return function(...innerArgs) {
        return fn.apply(that, args.concat(innerArgs))
    }
}
function curry(fn) {
    return function inner(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        }else {
            return function(...args2) {
                return inner.apply(this, args.concat(args2))
            }
        }
    }
}

柯里化（Currying）是函数式编程的一个很重要的概念，将使用多个参数的一个函数转换成一系列使用一个参数的函数
主要有三个作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行


/*********************** 参数复用***************************/
// 举个栗子：正则验证字符串

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// 需要复用第一个reg参数，Currying后，将两个参数分开，可以直接调用hasNumber，hasLetter等函数
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

let hasNumber = curryingCheck(/\d+/g)
let hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasLetter('21212')      // false

/***********************提前返回***************************/
// 比如：解决原生方法在现代浏览器和IE之间的兼容问题

// 提前返回: 使用函数立即调用进行了一次兼容判断（部分求值），返回兼容的事件绑定方法
// 延迟执行：返回新函数，在新函数调用兼容的事件方法。等待addEvent新函数调用，延迟执行
const addEvent = (function() {
    if(window.addEventListener) {
        return function(ele, type, fn, isCapture) {
            ele.addEventListener(type, fn, isCapture)
        }
    } else if(window.attachEvent) {
        return function(ele, type, fn) {
             ele.attachEvent("on" + type, fn)
        }
    }
})()

/***********************延迟计算***************************/
// js中bind实现机制正是Currying
Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)

    return function() {
        return _this.apply(context, args)
    }
}

```

