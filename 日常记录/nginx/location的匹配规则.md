### rewrite 用法介绍

```xml
rewrite        <regex>        <replacement>        <flag>;
 关键字        正则表达式         代替的内容         重写类型

Rewrite：一般都是rewrite
  
Regex：可以是字符串或者正则来表示想要匹配的目标URL
  
Replacement：将正则匹配的内容替换成replacement
  
Flag：flag标示，重写类型：
  - last：本条规则匹配完成后，继续向下匹配新的location URI规则；相当于Apache里德(L)标记，表示完成rewrite，浏览器地址栏URL地址不变；一般写在server和if中;
  - break：本条规则匹配完成后，终止匹配，不再匹配后面的规则，浏览器地址栏URL地址不变；一般使用在location中；
  - redirect：返回302临时重定向，浏览器地址会显示跳转后的URL地址；
  - permanent：返回301永久重定向，浏览器地址栏会显示跳转后的URL地址；
```