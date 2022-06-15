### 安装信息

```shell
Docroot is: /opt/homebrew/var/www

The default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /opt/homebrew/etc/nginx/servers/.

To restart nginx after an upgrade:
  brew services restart nginx
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/nginx/bin/nginx -g daemon off;
```



### 常用命令

```
nginx 
nginx -t 
nginx -s reopen 
nginx -s reload
nginx -s stop
nginx -s quit
```



```nginx
server {
    listen 80;
    server_name localhost;

    root /Users/liluyao/code/demo/nginx;

    location /test {
        root /Users/liluyao/code/demo/nginx;
        index index.html index.htm;
    }

    # location /demo1/ {
    #     # root /Users/liluyao/code/demo/nginx;
    #     # autoindex on;
    #     # autoindex_exact_size off;
    #     # autoindex_localtime on;
    #     # index a.html a.htm;
    # }

    location /html/ {
        proxy_pass http://localhost/demo1/;
    }

    location /api1/ {
        proxy_pass http://localhost:8081;
    }

    location /api2/ {
        proxy_pass http://localhost:8081/;
    }

    location /api3 {
        proxy_pass http://localhost:8081;
    }

    location /api4 {
        proxy_pass http://localhost:8081/;
    }

    location /api5/ {
        proxy_pass http://localhost:8081/haha;
    }

    location /api6/ {
        proxy_pass http://localhost:8081/haha/;
    }

    location /api7 {
        proxy_pass http://localhost:8081/haha;
    }

    location /api8 {
        proxy_pass http://localhost:8081/haha/;
    }

    location /static/ {
        proxy_pass http://127.0.0.1:3000;
    }

    location /baidu/ {
        proxy_pass https://www.baidu.com/;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3000/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}


```

