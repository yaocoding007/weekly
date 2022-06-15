> 工具函数

解析url

```js
function queryString(url) {
  	return url.replace(/^.*\?/,'')
  		.split('&')
  		.reduce((acc, curr) => {
      	const [key, val] = curr.split('=')
        return {
          ...acc,
          [key]: val
        }
    }, {})
}
```

正则 驼峰转换

```js

```



千分位

```js
function qianfen(num) {
  	return String(num).replace(/\d+/, function(data) {
      	return data.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
          	return $1+','
         })
    })
}

/(\d)(?=(\d{3})+$)/g

```



