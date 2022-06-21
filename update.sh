#!/bin/bash

[[ $1 ]] && MSG=$1 || MSG="update"

pwd;

cd /Users/liluyao/Code/github.com/yaocoding007/weekly;

pwd;

git add .
git commit -m ${MSG}

git push origin master -f

echo "*********************************************"
echo "*********************************************"
echo "******* 笔记更新完成～ 又是努力(滑水)的一天 *******"
echo "*********************************************"
echo "*********************************************"