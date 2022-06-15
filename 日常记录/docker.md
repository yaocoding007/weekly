## Docker

```shell
docker container ls
docker container kill [containerID]
docker ps -a
docker kill [containerID]
```

## 容器

```shel
docker container run --rm -p 8000:3000 -it 	`${image-name}` /bin/bash

docker container exec -it [containerID] /bin/bash

```

## 镜像

```shel
docker image build -t koa-demo .

docker rmi [image-name]


# Node镜像
FROM node:15
```





