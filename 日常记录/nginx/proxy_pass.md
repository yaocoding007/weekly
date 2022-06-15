### proxy_pass 的使用实例

#### 前置内容，下面的示例都是在这个server 下

```nginx
server {
  listen 80;
  server_name localhost;
}
```

#### proxy_pass 分为两种类型

* 一种是只包含IP和端口号的,这种称为不带URI的方式
  * proxy_pass http://127.0.0.1:8081
* 一种是端口号之后有其他的路径的,这种称为带URI的方式
  * proxy_pass http://127.0.0.1:8081/
  * proxy_pass http://127.0.0.1:8081/abc

#### 示例一 不带URI的方式

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:8081;
}
```

匹配到的路径也会带到 最后的访问路径上

比如 访问 http://127.0.0.1/api/xxx 会代理到 http://127.0.0.1:8081/api/xxx



#### 示例二 带URI的方式

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:8080/;
}
```

匹配到的路径也会带到 最后的访问路径上

比如 访问 http://127.0.0.1/api/xxx 会代理到 http://127.0.0.1:8081/xxx

> 这种形式像是去做了一个替换
>
> 把 http://127.0.0.1/api 替换成了代理的 url  http://127.0.0.1:8081/ 
>
> 然后再把剩余的拼接上
>
> 最终的访问路径就是 http://127.0.0.1:8081/xxx

##### 再看这个例子

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:8080/test;
}
```

> 我们访问 http://127.0.0.1/api/xxx
>
> http://127.0.0.1/api/ 会被替换成 http://127.0.0.1:8080/test
>
> 加上剩余的 最终访问的就是 http://127.0.0.1:8080/testxxx



#### 总结一下

```nginx
server {
    listen       80;
    server_name  localhost;

    location /api1/ {
        proxy_pass http://localhost:8081;
    }
    # http://127.0.0.1/api1/xxx -> http://localhost:8081/api1/xxx


   location /api2/ {
        proxy_pass http://localhost:8081/;
    }
    # http://localhost/api2/xxx -> http://localhost:8081/xxx


   location /api3 {
        proxy_pass http://localhost:8081;
    }
    # http://localhost/api3/xxx -> http://localhost:8081/api3/xxx


   location /api4 {
        proxy_pass http://localhost:8081/;
    }
    # http://localhost/api4/xxx -> http://localhost:8081//xxx，请注意这里的双斜线，好好分析一下。


   location /api5/ {
        proxy_pass http://localhost:8081/haha;
    }
    # http://localhost/api5/xxx -> http://localhost:8081/hahaxxx，请注意这里的haha和xxx之间没有斜杠，分析一下原因。

   location /api6/ {
        proxy_pass http://localhost:8081/haha/;
    }
    # http://localhost/api6/xxx -> http://localhost:8081/haha/xxx

   location /api7 {
        proxy_pass http://localhost:8081/haha;
    }
    # http://localhost/api7/xxx -> http://localhost:8081/haha/xxx

   location /api8 {
        proxy_pass http://localhost:8081/haha/;
    }
    # http://localhost/api8/xxx -> http://localhost:8081/haha//xxx，请注意这里的双斜杠。
}
```



### 看再多都不如实践一下

##### 实践步骤:

1. 在```nginx```中添加上面总结 配置文件
   1. ```nginx``` 启动nginx
   2. ```nginx -s reload``` 保存配置文件 重启nginx
   3. ``nginx -s stop`` 关闭nginx
2. 用node去启动一个简单的server去返回请求的URL 代码如下
3. 这样在浏览器直接去访问总结的中给出的URL 就能直接到看效果了



### 用于测试的代码 用node起了个简单的server 用来验证访问的URL

```javascript
const http = require('http');

const PORT = 8001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        url: req.url
    }));
})

server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}/`)
})
```

