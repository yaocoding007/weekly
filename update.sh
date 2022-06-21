#!/bin/bash

[[ $1 ]] && MSG=$1 || MSG="update"

pwd;

cd /Users/liluyao/Code/github.com/yaocoding007/weekly;

pwd;

git add .
git commit -m "${MSG}"

git push origin master -f

echo -e "\033[36m 好记性不如烂笔头 \033[0m"