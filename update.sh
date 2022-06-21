#!/bin/bash

[[ $1 ]] && MSG=$1 || MSG="update"

echo -e "\033[33m update msg: $MSG  \033[0m"

echo -e "\n"
echo -e "\033[33m dirname: `pwd`  \033[0m"
echo -e "\n"
cd /Users/liluyao/Code/github.com/yaocoding007/weekly;
echo -e "\n"
echo -e "\033[33m dirname: `pwd`  \033[0m"
echo -e "\n"
git add .
git commit -m "${MSG}"

git push origin master -f

echo -e "\n"
echo -e "\033[36m 好记性不如烂笔头 \033[0m"