## gitlab 项目迁移

1. 先把需要迁移的项目clone到本地

   `git clone`

2. 添加新的远程主机地址

   `git remote add gitlab git@gitlab.xxxx`

3. 推送master分支到新的仓库

   `git push -u gitlab master`

4. 推动所有的tag

   `git push gitlab --tags`

5. 删除原有的`remote`

   `git remote rm origin `

6. 重命名`remote`

   `git remote rename gitlab(old_name) origin(new_name)`

```git
git remote add gitlab

git push -u gitlab master


git push gitlab --tags

git remote rm origin

git remote rename gitlab origin


```

## gitlab ci 本地调试

1. 开启dokcer
2. 执行`gitlab-runner exec docker ${build}` build 是job


## Cicd template 

https://docs.gitlab.com/ee/ci/yaml/includes.html

https://www.bianchengquan.com/article/406862.html

https://cloud.tencent.com/developer/article/1644680

## .gitignore 不生效

https://developer.aliyun.com/article/634481