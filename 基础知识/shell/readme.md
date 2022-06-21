# 用过的shell语句

```shell
# 获取json文件中的值
PROJECT_DIR=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

```

```shell
# 与或

[[ $1 ]] && ENV=$1 || ENV="test"

[[ $LDAP_NAME ]] || LDAP_NAME=$3

```

```shell
# 输出空行
echo -e "\n"
# 带颜色的文字
# https://cloud.tencent.com/developer/article/1635321
echo -e "\033[30m 黑色字 \033[0m" 
echo -e "\033[31m 红色字 \033[0m" 
echo -e "\033[32m 绿色字 \033[0m" 
echo -e "\033[33m 黄色字 \033[0m" 
echo -e "\033[34m 蓝色字 \033[0m" 
echo -e "\033[35m 紫色字 \033[0m" 
echo -e "\033[36m 天蓝字 \033[0m" 
echo -e "\033[37m 白色字 \033[0m"
```