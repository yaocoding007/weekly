## map
```js

Array.prototype.map = function(callback) {
    const arr = this, len = this.length, i = 0;
    let result = [];
    for(; i < length; i++) {
        result.push(callback(arr[i]))
    }
    return result;
}

```

## reduce

```js
Array.prototype._reduce = (callback, initialValue) => {
    let arr = this;
    let base = typeof initialValue == 'undefined' ? arr[0] : initialValue;
    let startPoint = typeof initialValue === 'undefined' ? 1 : 0;
    arr.slice(startPoint).forEach((val, index) => {
        base = callback(base, val, index + startPoint, arr)
    })
    return base
}
```



## filter

```js
var arr = [1,2,3,4,5,6];

var arr1 = [4,5,6,7,8,9];

var resArr = arr.filter(arrItem => {
    return arr1.find(arr1Item =>  (arr1Item === arrItem))
})

console.log(resArr) // [ 4, 5, 6 ]
```



## flat
```js
function flat(arr) {
    return arr.reduce((acc, curr) => {
        const newValue = Array.isArray(curr)
            ? flat(curr)
            : curr
        return acc.concat(newValue)
    }, [])
}

const arr = [1, 3, 4, [5, 6], [7, 8, [9, 10]]]

console.log(flat(arr))

```

## unique

```JS

function unique2(acc) {
    return acc.reduce((acc, curr) => {
        if(acc.includes(curr)) {
            return acc;
        }else {
            return [...acc, curr]
        }
    }, [])
}

//
function unique1(acc){
    const cache = {};
    return acc.reduce((acc, curr) => {
        if(cache[curr]) {
            return acc;
        }else {
            cache[curr] = true;
            return acc.concat(curr)
        }
    }, []);
}
//reduce版本
function uniqueArr(){
    return oldArr.reduce((acc,curr) => {
    if(!acc.hash[curr.id]){
        return {
    hash: {...curr.hash, [curr.id]: true},
    result: [...acc.result,curr]
    }
    }
    else{
    return acc;
    }
    },{result: [],hash: {}}).result
}

//递归的做法


const objArr = [{id:1}, {id:2},{id:1}, {id:3}];

function uniqueWith(fn, arr) {
    return (function _uniqueWith(_arr, _fn, _result = []) {
        if (_arr.length === 0) {
            return _result;
        }
        _fn = _fn || ((x, y) => x === y);
        const [cur, ...rest] = _arr;
        const newResult = _result.find(item => fn(cur, item))
            ? _result
            : [..._result, cur];
        return _uniqueWith(rest, _fn, newResult)
    })(arr, fn)
}
console.log(uniqueWith((x, y) => x.id === y.id, objArr))
      
```



## sort

```js
function quitSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const midIndex = Math.floor(arr.length/2);
    const mid = arr.splice(midIndex, 1)[0];
    let left = [], right = [];
    arr.forEach(item => {
        if(item < mid) {
            left.push(mid)
        }else {
            right.push(mid)
        }
    })

    return [...quitSort(left), mid, ...quitSort(right)]
}

```